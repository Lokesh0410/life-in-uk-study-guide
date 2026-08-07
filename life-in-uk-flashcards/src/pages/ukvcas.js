// src/data/immigrationGuides/ukvcas.js

const ukvcas = {
    slug: "ukvcas-appointment",

    title: "UKVCAS Appointment Guide UK: Biometrics and Document Upload",

    seo: {
        metaTitle:
            "UKVCAS Appointment Guide UK: Biometrics, Documents & Process",
        metaDescription:
            "What happens at a UKVCAS/TLScontact biometric appointment: what to bring, service point types and fees, and how to book, reschedule or fix problems.",
        keywords: [
            "UKVCAS appointment",
            "UK visa biometrics appointment",
            "ILR biometrics",
            "UKVI appointment",
            "TLScontact appointment"
        ]
    },

    breadcrumbs: [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Immigration Guides",
            url: "/immigration-guides"
        },
        {
            name: "UKVCAS Appointment",
            url: "/ukvcas-appointment"
        }
    ],

    introduction: `
Most people applying for a UK visa, extension, settlement (ILR) or citizenship
from inside the UK have to attend an in-person appointment to give their
biometric information (fingerprints and a photograph) and, in many cases,
submit supporting documents. This is what "[UKVCAS](https://www.gov.uk/ukvcas)" refers to.

IMPORTANT: the company that runs these appointments in the UK changed on
15 October 2024, from Sopra Steria to TLScontact. If you see older guides,
articles or forum posts referring to "Sopra Steria appointments" or a Sopra
Steria portal, that information is now out of date. The booking portal,
service point details and provider are TLScontact. The GOV.UK guidance and
booking process itself (via your online application) has not fundamentally
changed.
`,

    sections: [
        {
            heading: "What UKVCAS actually is, and who runs it",
            content: `
UKVCAS (UK Visa and Citizenship Application Services) is not a separate
government body: it's GOV.UK's name for the network of in-person
appointment service points where UK Visas and Immigration (UKVI) collects
biometric information and, depending on your service type, supporting
documents.

Since 15 October 2024, these UK-based service points have been operated
under contract by **TLScontact**, which replaced the previous provider,
Sopra Steria. (Outside the UK, a separate transition happened between
September 2024 and January 2025, where VFS Global took over many overseas
visa application centres that TLScontact had previously run. If you're
applying from outside the UK, check which provider currently operates your
local centre rather than assuming it's the same as the UK service.)

GOV.UK is explicit that UKVCAS staff cannot give you a decision on your
application at the appointment: it is purely for identity
verification and document handling. Your case is decided separately by a
UKVI caseworker afterwards.
`
        },

        {
            heading: "Who needs a UKVCAS appointment",
            content: `
If you're applying for most UK visas, extensions, switching, indefinite
leave to remain (ILR), or British citizenship from inside the UK, you will
usually be told during the online application that you need to book a
UKVCAS appointment to provide your biometrics.

GOV.UK sets out specific circumstances where you may **not** need a new
appointment, including if you:

- are in the UK and hold a biometric residence permit (BRP) that is expired
  but usable for up to 24 months after its expiry date, or usable until
  31 December 2026, and
- have previously given your biometric information for a recent
  application, and
- are applying for a Graduate, Student, or Skilled Worker visa (specific
  routes only; check your own case type on GOV.UK).

Some EU Settlement Scheme applicants who are EEA/Swiss citizens, or who
already hold a valid biometric residence card, may also be exempt.

Because exemptions are route- and history-specific, don't assume either way.
Your own GOV.UK online application will tell you directly whether an
appointment is required for your case, and if so, it will let you create a
UKVCAS/TLScontact account to book one.
`
        },

        {
            heading: "What is a biometric appointment (biographical appointment)?",
            content: `
"Biometric appointment" and "biographical appointment" both refer to the
same UKVCAS visit: the in-person session where TLScontact captures your
fingerprints and a digital photograph and links them electronically to your
application. GOV.UK and TLScontact use "biometric appointment"; you may see
"biographical appointment" used informally elsewhere, but there is no
separate appointment type by that name.

Per TLScontact's own guidance, biometric enrolment involves a digital scan
of all 10 fingerprints and a photograph, taken either at a self-service
kiosk or in a booth with a trained agent. Your face must be clearly visible
(no hair over your eyes, no items obscuring your face or neck, glasses may
need to be removed), and fingertips should be free of cuts, decorations or
temporary injuries. Children under 5 need a photo only, no fingerprints.
Everyone attending, including babies, must be physically present.
`
        },

        {
            heading: "Service point types and fees",
            content: `
Not all UKVCAS/TLScontact service points are the same, and how much (if
anything) you pay on top of your visa fee depends on which one you use and
what extra services you choose:

- **Core (standard) service points**: free biometric appointments,
  available at a smaller number of larger centres in major cities. GOV.UK
  confirms that how much you pay "depends on the type of service point and
  whether you need extra services," and the core service itself does not carry
  an extra charge.
- **Enhanced service points**: a wider network of smaller locations
  (commonly hosted in libraries and similar community venues) that charge a
  fee for use, because they're more numerous and more convenient
  geographically.
- **Priority/premium appointments and lounges**: faster or out-of-hours
  appointment slots (including weekend or next-day/same-day booking for
  urgent applications) carry an additional charge on top of the standard
  fee.
- **Assisted document scanning**: if you don't upload all your supporting
  documents online yourself and instead want staff at a core service point
  to scan paper documents for you, this is typically a separate paid
  add-on service, commonly cited in the low tens of pounds depending on the
  service point, rather than being included free.

This is separate from your Home Office application fee itself. GOV.UK's
published fee table (Home Office immigration and nationality fees, updated
8 April 2026) confirms, for example, indefinite leave to remain (main
applicant and dependants) at £3,226, and the Life in the UK Test at £50,
both unchanged in that update except ILR which rose from £3,029.

HONEST CAVEAT: exact current UKVCAS/TLScontact service fees change and vary
by service point and service tier, and GOV.UK does not publish one single
fixed price list on its main UKVCAS page. The specific price you're quoted
will appear when you book your appointment through your account. Treat any
fee figure you see (including the ranges above) as indicative, not a
quote, and always check the amount shown at the time of booking before you
pay. For the Home Office application fee itself, check the current
[GOV.UK fee table](https://www.gov.uk/government/publications/visa-regulations-revised-table/home-office-immigration-and-nationality-fees-8-april-2026)
directly, since fees are revised periodically.
`
        },

        {
            heading: "Identity verification at check-in",
            content: `
Per TLScontact's own guidance, you should arrive at least 15 minutes before
your scheduled appointment time. You'll typically pass through a security
checkpoint (avoid bringing sharp or prohibited items), then go to a welcome
desk where staff check your printed appointment confirmation, including its
QR code, against your current passport or travel document. TLScontact
states the average appointment processing time is around 30 minutes per
applicant, though this varies by service point and how busy it is.

Your appointment cannot proceed without your current passport or travel
document, unless the Home Office has given prior authorisation; if you
don't have it, contact the Home Office for guidance before booking or
attending.
`
        },

        {
            heading: "What actually happens at the appointment",
            content: `
Based on GOV.UK guidance and the standard TLScontact process, a typical
appointment involves:

1. **Check-in and identity verification**: staff check your printed
   appointment confirmation (which includes a QR code) against your
   passport or other travel document.
2. **Biometric enrolment**: your fingerprints are scanned electronically
   and a digital photograph is taken. This is the core purpose of the
   appointment and applies to virtually everyone attending.
3. **Document handling**: if you already uploaded all your supporting
   documents through your online application, there is typically nothing
   further to submit in person. If you did not, or chose an assisted/
   premium service that includes scanning, staff will scan your paper
   documents at the appointment (you're advised to bring these in A4 size,
   unstapled, and clearly legible).
4. **You leave without a decision.** GOV.UK is explicit that you will not
   receive a decision on your application at the appointment. That comes
   later, separately, from a UKVI caseworker.

If you're attending with family members applying together, GOV.UK requires
everyone to attend the same appointment together. For children under 16,
the person registered as the "responsible adult" on the application must
attend with valid photo ID.
`
        },

        {
            heading: "Document scanning: self-upload vs the assisted service",
            content: `
You have two ways to get your supporting documents into your application:

- **Self-upload (free)**: upload documents yourself through your
  UKVCAS/TLScontact account before your appointment. Per TLScontact's
  guidance, accepted formats are jpg, jpeg, png and pdf, with a maximum
  file size of 7.25MB per file. If uploads fail, TLScontact suggests
  checking your file format/size, clearing your browser cache and cookies,
  or trying incognito mode before contacting their support.
- **Assisted service (paid)**: if you select this option, or upgrade to it
  on the day, a TLScontact representative scans and uploads your paper
  documents for you at the service point. There's no need to self-upload in
  advance if you've chosen this route, but you must bring all relevant
  supporting documents with you to the appointment.

Once you submit your online self-upload, the function typically locks, so
double-check everything is included before finalising it.
`
        },

        {
            heading: "Setting up your UKVCAS/TLScontact account",
            content: `
You cannot register for a UKVCAS/TLScontact account ahead of time. Per
TLScontact's own process, you must first complete your visa, extension, ILR
or citizenship application on GOV.UK and pay the Home Office fee. This
generates your Unique Application Number (UAN), which you then use to
register and activate your TLScontact account.

If you don't receive your account activation email within 24 hours,
TLScontact's guidance is to contact their Feedback & Complaints team via
their "Contact us" page, rather than trying to re-register. Once your
account is active, you enter your postcode or city to see nearby service
points, then select a date, time and any added-value services before
confirming and paying for anything you've selected.
`
        },

        {
            heading: "Rescheduling and cancelling your appointment",
            content: `
These rules come directly from TLScontact's published help centre, so they
supersede any general or older guidance:

- **Rescheduling**: log into your TLScontact account and select "Change"
  next to your appointment. You can reschedule up to **24 hours before**
  your scheduled appointment time, and a **maximum of three times**. If you
  need to change again after using your three reschedules, or you're inside
  the 24-hour window, contact TLScontact directly via their "Contact us"
  web form.
- **Cancelling**: log into your account and select "Cancel appointment."
  Check TLScontact's Terms and Conditions first, since refund conditions
  for any paid added-value services depend on their cancellation policy.
- **Missing your appointment**: if you miss it, log back into your account
  and select "Change" to book a new appointment, or "Reschedule to other
  locations" if you'd prefer a different service point.
- **Changing service point location**: from your appointment summary page,
  select "Reschedule to other locations" to move to a different UKVCAS
  service point.

HONEST CAVEAT: neither GOV.UK nor TLScontact publish a fixed missed-
appointment fee on their help pages; if a charge applies to your booking it
will be shown in your account or your service point's terms, so don't rely
on a figure quoted elsewhere, including this page.
`
        },

        {
            heading: "What to actually bring",
            content: `
Based on GOV.UK's stated requirements, bring:

- **A printed copy of your appointment confirmation**, including its QR
  code, which is checked at reception.
- **Your current passport or other travel document** used on your
  application.
- **Your biometric residence permit (BRP)**, if you currently hold one.
- **Your application reference / Unique Application Number (UAN)**, in
  case it's needed separately from your appointment confirmation.
- **Any supporting documents you have not already uploaded online**,
  especially if you're using an assisted scanning or premium service.
  Bring these as unstapled A4 pages where possible, since they'll likely be
  scanned on-site.
- **Photo ID for the "responsible adult"**, if a child under 16 is
  attending as part of your application.

Practical tip sourced from how the online process works: upload as much as
you can yourself in advance, several working days before your appointment,
so you have time to check nothing is missing. Once documents are submitted
through the online portal, the upload function locks and you generally
cannot go back and add more. It's therefore worth taking your own screenshots or
copies of exactly what you submitted, in case a query comes up later.
`
        },

        {
            heading: "How to book your appointment",
            content: `
You don't book a UKVCAS/TLScontact appointment as a standalone step. It
happens as part of your online visa, extension, ILR or citizenship
application on GOV.UK. Once you submit your application and pay the
application fee, you'll typically be prompted to register for a
[UKVCAS/TLScontact account](https://vcas.tlscontact.com/country/gb/) using your Unique Application Number (UAN), and
book an available appointment slot at a service point of your choice.

Appointment availability varies by location, time of year, and service
tier, since enhanced and premium slots are often available sooner than free
core-service slots simply because there are more of them and they're paid.
For rescheduling or cancelling once booked, see the dedicated section
above, which reflects TLScontact's current published policy rather than
older guidance that may still reference the previous Sopra Steria system.
`
        }
    ],

    checklist: [
        "Complete and submit your visa, extension, ILR or citizenship application online",
        "Pay your application fee and note your Unique Application Number (UAN)",
        "Register for a UKVCAS/TLScontact account if prompted",
        "Upload as many supporting documents online as possible, several days before your appointment",
        "Book your appointment, choosing a service point and tier that suits your budget and timeline",
        "Print your appointment confirmation with its QR code",
        "Gather your passport, BRP (if held), and any documents not already uploaded",
        "Attend with all family members applying together, plus a responsible adult for any child under 16",
        "Keep records of what you submitted, in case you're asked about it later"
    ],

    faqs: [
        {
            question: "What's the difference between a biographical appointment and a biometric appointment?",
            answer:
                "None: they're the same thing. GOV.UK and TLScontact call it a 'biometric appointment' (fingerprints and photograph); 'biographical appointment' is an informal term some applicants use for the same visit. There isn't a separate appointment type under that name."
        },
        {
            question: "How do I set up my UKVCAS/TLScontact account?",
            answer:
                "You can't register in advance. First complete and pay for your visa, extension, ILR or citizenship application on GOV.UK; this generates your Unique Application Number (UAN). You then use the UAN to register and activate your TLScontact account, after which you can search service points and book. If your activation email doesn't arrive within 24 hours, TLScontact's guidance is to contact their Feedback & Complaints team rather than re-registering."
        },
        {
            question: "Is UKVCAS still run by Sopra Steria?",
            answer:
                "No. Sopra Steria was replaced as the UK's UKVCAS provider by TLScontact on 15 October 2024. If you're reading older guidance that refers to Sopra Steria appointments or portals, treat it as outdated: the current provider, portal and service points are TLScontact's."
        },
        {
            question: "How much does a UKVCAS appointment cost?",
            answer:
                "It depends on the service point and service tier you choose. Core service points (a smaller number of larger centres) offer free biometric appointments. Enhanced service points and premium/priority appointments or lounges charge additional fees, and assisted document scanning is typically a separate paid add-on. GOV.UK does not publish one fixed price list. The exact amount is shown when you book through your account, so check there rather than relying on any figure quoted elsewhere, including this page."
        },
        {
            question: "What happens if I miss my UKVCAS appointment?",
            answer:
                "Per TLScontact's help centre, log back into your account and select 'Change' to book a new appointment, or 'Reschedule to other locations' if you'd prefer a different service point. You can reschedule up to 3 times, and changes must be made at least 24 hours before your scheduled time; after that, or once you've used your 3 changes, contact TLScontact directly via their 'Contact us' form."
        },
        {
            question: "Can someone else attend my appointment for me?",
            answer:
                "No. Biometric enrolment (fingerprints and photograph) requires you to be physically present, since the whole purpose of the appointment is verifying your identity against your application. The only exception in GOV.UK's guidance is for children under 16, who must attend with a responsible adult, not be represented by one."
        },
        {
            question: "How long does a UKVCAS appointment take?",
            answer:
                "TLScontact states an average appointment processing time of around 30 minutes per applicant, though this varies by service point, how busy it is, and whether you're using assisted document scanning. Arrive at least 15 minutes before your scheduled time, as advised by TLScontact."
        },
        {
            question: "What if my supporting documents aren't ready in time for my appointment?",
            answer:
                "Try to upload everything you have online in advance, ideally several working days before your appointment, so you can see if anything is missing while you can still act on it. If documents genuinely aren't ready, check your specific application's guidance on GOV.UK about submitting evidence after your appointment, since policy on this can depend on your visa route."
        },
        {
            question: "Do I get a decision on my visa at the UKVCAS appointment?",
            answer:
                "No. GOV.UK is explicit that you will not receive a decision on your application at your appointment. The appointment is only for biometric enrolment and, where relevant, document handling. Your case is decided separately afterwards by a UKVI caseworker."
        },
        {
            question: "Can I upload documents before my appointment instead of bringing paper copies?",
            answer:
                "Yes, for most applications you can self-upload supporting documents online through your application before attending. Doing so generally avoids the assisted document scanning fee charged at core service points for staff to scan paper copies on your behalf. Once you submit your online upload, the function typically locks, so double-check everything is included before you finalise it."
        }
    ],

    relatedPages: [
        {
            title: "ILR Guide",
            url: "/ilr-guide"
        },
        {
            title: "British Citizenship Guide",
            url: "/british-citizenship-guide"
        }
    ],

    officialSources: [
        {
            title: "GOV.UK - UKVCAS",
            url: "https://www.gov.uk/ukvcas"
        },
        {
            title: "TLScontact - UKVCAS appointment booking portal",
            url: "https://vcas.tlscontact.com/country/gb/"
        },
        {
            title: "TLScontact - Help Centre (booking, rescheduling, biometrics FAQs)",
            url: "https://vcas.tlscontact.com/country/gb/vac/gbLON2vcas/help-centre"
        },
        {
            title: "GOV.UK - Home Office immigration and nationality fees, 8 April 2026",
            url: "https://www.gov.uk/government/publications/visa-regulations-revised-table/home-office-immigration-and-nationality-fees-8-april-2026"
        }
    ],

    metadata: {
        contentType: "guide",
        category: "Immigration Guides",
        author: "Life in UK Coach",
        lastUpdated: "2026-08-06"
    }
};

export default ukvcas;
