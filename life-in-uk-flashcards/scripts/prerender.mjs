// Prerenders each route to its own static index.html after `react-scripts build`.
// Fixes: every route serving identical <title>/<meta description>/<link canonical>/OG tags,
// which Google Search Console flagged as "Alternate page with proper canonical tag"
// (every guide/pricing/mock-exam page self-canonicalized to "/" and got dropped from the index).
import { spawn } from "child_process";
import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildDir = path.join(__dirname, "..", "build");
const PORT = 45123;

// Keep this list in sync with public/sitemap.xml
const routes = [
  "/",
  "/mock-exams",
  "/pricing",
  "/study-guide/british-history",
  "/study-guide/government-and-law",
  "/ilr-guide",
  "/british-citizenship-guide",
  "/skilled-worker-ilr",
  "/spouse-visa-ilr",
  "/global-talent-ilr",
  "/long-residence-ilr",
  "/english-requirement",
  "/life-in-uk-requirement",
  "/ukvcas-appointment",
  "/evisa-explained",
  "/citizenship-ceremony",
  "/british-passport-application",
  "/dual-citizenship",
];

function startStaticServer() {
  // Run in its own process group (detached) so we can kill the whole
  // tree later — `npx` spawns `serve` as a child process, and killing
  // only the npx wrapper leaves `serve` running, which hangs CI after
  // this script's own work is done (Netlify build never reaches "Deploy").
  const server = spawn(
    "npx",
    ["serve", "-s", buildDir, "-l", String(PORT)],
    { stdio: "pipe", detached: true }
  );
  return new Promise((resolve, reject) => {
    let ready = false;
    const onData = (data) => {
      if (!ready && data.toString().includes("Accepting connections")) {
        ready = true;
        resolve(server);
      }
    };
    server.stdout.on("data", onData);
    server.stderr.on("data", onData);
    server.on("error", reject);
    // Fallback in case the "Accepting connections" message format changes.
    setTimeout(() => {
      if (!ready) {
        ready = true;
        resolve(server);
      }
    }, 4000);
  });
}

function killServerTree(server) {
  try {
    // Negative PID signals the whole process group (requires detached: true above).
    process.kill(-server.pid, "SIGTERM");
  } catch {
    // Fallback: at least kill the direct child if group-kill isn't available.
    server.kill();
  }
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();
  const url = `http://localhost:${PORT}${route}`;
  await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
  // Let the route's useDocumentMeta effect run before snapshotting.
  await new Promise((r) => setTimeout(r, 150));
  const html = await page.content();
  await page.close();

  const outDir = route === "/" ? buildDir : path.join(buildDir, route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
  console.log(`Prerendered ${route} -> ${path.relative(buildDir, path.join(outDir, "index.html"))}`);
}

async function main() {
  if (!fs.existsSync(buildDir)) {
    console.error("build/ not found — run `npm run build` first.");
    process.exit(1);
  }

  const server = await startStaticServer();
  const browser = await puppeteer.launch({ headless: "new" });

  try {
    for (const route of routes) {
      await prerenderRoute(browser, route);
    }
  } finally {
    await browser.close();
    killServerTree(server);
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    // Prerendering is an SEO enhancement, not a hard requirement for the app to run —
    // never fail the whole Netlify deploy just because Chrome/puppeteer couldn't launch.
    console.error("Prerender step failed, continuing without it:", err);
    process.exit(0);
  });
