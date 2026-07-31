// src/data/immigrationGuides/evisa.js

const evisa = {
    slug: "evisa-explained",

    title: "UK eVisa Explained: Digital Immigration Status Guide",

    seo: {
        metaTitle:
            "UK eVisa & Share Code Explained 2026: How to Prove Your Status",
        metaDescription:
            "Understand the UK eVisa system and share codes: how to generate a share code, how long it lasts, and how to prove your immigration status to employers and landlords.",
        keywords: [
            "UK eVisa",
            "share code",
            "evisa share code",
            "digital immigration status",
            "UKVI account",
            "prove immigration status"
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
            name: "eVisa Explained",
            url: "/evisa-explained"
        }
    ],

    introduction: `
An [eVisa](https://www.gov.uk/evisa) is a digital record of a person's immigration status in the UK.

The UK Government is moving towards a digital immigration system where people
can prove their status online instead of relying on physical documents.
`,

    sections: [
        {
            heading: "What is an eVisa?",
            content: `
An eVisa provides digital evidence of:

- immigration status
- conditions of permission
- rights in the UK

It is linked to a person's [UKVI account](https://www.gov.uk/ukvi-account).
`
        },

        {
            heading: "Why is the UK introducing eVisas?",
            content: `
The move towards eVisas is part of the UK Government's plan to create a more
digital immigration system.

Digital status allows people to prove their immigration status online.
`
        },

        {
            heading: "Accessing your eVisa",
            content: `
People with eVisa status may need to:

- create or access a UKVI account
- ensure personal details are correct
- keep passport details updated
`
        },

        {
            heading: "Using an eVisa",
            content: `
An eVisa can be used to prove status for purposes such as:

- right to work checks
- right to rent checks
- travel-related checks
`
        },

        {
            heading: "Common eVisa issues",
            content: `
Common issues include:

- incorrect personal information
- outdated passport details
- difficulty accessing accounts

Applicants should resolve issues through official UKVI channels.
`
        },

        {
            heading: "What is a share code?",
            content: `
A share code is a temporary code generated from a person's UKVI account that lets someone else
(an employer, landlord, or other checker) view their immigration status online, without needing
to see the physical eVisa or UKVI account itself.

To generate a share code:

- Sign in to the "[View and prove your immigration status](https://www.gov.uk/view-prove-immigration-status)" service using your UKVI account details.
- Create a code for the purpose you need (for example, a right to work check or right to rent check).
- Share the code with the employer, landlord or other checker who needs it.

A share code lasts for 90 days from when it is created, and can be used as many times as needed
before it expires. Once it expires, a new share code must be generated. The person checking the
code will also need the code holder's date of birth to view the result.
`
        }
    ],

    checklist: [
        "Create UKVI account if required",
        "Check personal details",
        "Update passport information",
        "Understand how to prove status"
    ],

    faqs: [
        {
            question: "What is an eVisa?",
            answer:
                "An eVisa is a digital record of a person's UK immigration status."
        },
        {
            question: "Do I still need a physical BRP?",
            answer:
                "The UK is moving towards digital immigration status. Applicants should check current GOV.UK guidance for their circumstances."
        },
        {
            question: "How do I access my eVisa?",
            answer:
                "Eligible individuals can access their digital status through a UKVI account."
        },
        {
            question: "What is a share code and how long does it last?",
            answer:
                "A share code is generated from your UKVI account via view-immigration-status.service.gov.uk and lets an employer, landlord, or other checker view your immigration status online. It lasts 90 days and can be used multiple times until it expires."
        },
        {
            question: "What does the person checking my share code need?",
            answer:
                "The checker needs your share code and your date of birth to view your immigration status result."
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
            title: "GOV.UK - eVisa",
            url: "https://www.gov.uk/evisa"
        },
        {
            title: "GOV.UK - View and prove your immigration status (share code)",
            url: "https://www.gov.uk/view-prove-immigration-status"
        }
    ],

    metadata: {
        contentType: "guide",
        category: "Immigration Guides",
        author: "Life in UK Coach",
        lastUpdated: "2026-07-20"
    }
};

export default evisa;