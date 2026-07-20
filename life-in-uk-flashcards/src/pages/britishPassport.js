// src/data/immigrationGuides/britishPassport.js

const britishPassport = {
    slug: "british-passport-application",

    title: "British Passport Application After Citizenship Guide",

    seo: {
        metaTitle:
            "British Passport Application After Citizenship: First Passport Guide",
        metaDescription:
            "Learn how to apply for your first British passport after citizenship, including documents, application steps and useful guidance.",
        keywords: [
            "British passport after citizenship",
            "first UK passport",
            "British passport application"
        ]
    },

    introduction: `
After becoming a British citizen, eligible applicants can apply for a British
passport.

The passport application process is handled by His Majesty's Passport Office.
`,

    sections: [
        {
            heading: "Who can apply?",
            content: `
You can apply for a British passport if you are a British citizen.

For first passport applications, you normally need evidence of citizenship.
`
        },

        {
            heading: "Application process",
            content: `
The process usually involves:

1. Completing an application
2. Providing required information
3. Providing documents
4. Providing a photograph
5. Receiving the passport
`
        },

        {
            heading: "Required documents",
            content: `
Applicants may need:

- citizenship certificate
- identity documents
- other supporting information requested by HM Passport Office
`
        },

        {
            heading: "Keeping citizenship documents safe",
            content: `
Citizenship certificates are important documents and should be stored safely
after becoming British.
`
        }
    ],

    checklist: [
        "Receive citizenship certificate",
        "Prepare documents",
        "Complete passport application",
        "Provide photograph",
        "Submit application"
    ],

    faqs: [
        {
            question: "Can I apply for a passport immediately after citizenship?",
            answer:
                "After completing the citizenship process and receiving your certificate, you can apply for a British passport."
        },
        {
            question: "What document proves British citizenship?",
            answer:
                "A certificate of British citizenship is commonly used as evidence during a first passport application."
        }
    ],

    relatedPages: [
        {
            title: "Citizenship Ceremony",
            url: "/citizenship-ceremony"
        },
        {
            title: "British Citizenship Guide",
            url: "/british-citizenship-guide"
        }
    ],

    officialSources: [
        {
            title: "GOV.UK - Apply for First Adult Passport",
            url: "https://www.gov.uk/apply-first-adult-passport"
        }
    ],

    metadata: {
        contentType: "guide",
        category: "Immigration Guides",
        author: "Life in UK Coach",
        lastUpdated: "2026-07-20"
    }
};

export default britishPassport;