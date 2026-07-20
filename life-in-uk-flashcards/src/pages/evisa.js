// src/data/immigrationGuides/evisa.js

const evisa = {
    slug: "evisa-explained",

    title: "UK eVisa Explained: Digital Immigration Status Guide",

    seo: {
        metaTitle:
            "UK eVisa Explained 2026: Digital Immigration Status Guide",
        metaDescription:
            "Understand the UK eVisa system, how digital immigration status works, accessing your UKVI account and proving your immigration status.",
        keywords: [
            "UK eVisa",
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
An eVisa is a digital record of a person's immigration status in the UK.

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

It is linked to a person's UKVI account.
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