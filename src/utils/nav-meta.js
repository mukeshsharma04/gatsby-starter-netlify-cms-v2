const NavMeta = {
  "navigation": [
    {
      "route": "/about",
      "label": "About"
    },
    {
      "route": "/services",
      "label": "Services"
    },
    {
      "route": "/results",
      "label": "Results"
    },
    {
      "route": "/the-primoko-difference",
      "label": "The Primoko Difference"
    },
    {
      "route": "/contact",
      "label": "Let's Talk"
    }
  ],
  "sidebar": [
    {
      "route": "/",
      "label": "Home",
      "childs": []
    },
    {
      "route": "/about",
      "label": "About Primoko",
      "childs": [
        {
          "route": "/about",
          "label": "Overview"
        },
        {
          "route": "/team",
          "label": "Team"
        },
        {
          "route": "/career",
          "label": "Carrers"
        }
      ]
    },
    {
      "route": "/services",
      "label": "Services",
      "childs": [
        {
          "route": "/services",
          "label": "Overview"
        },
        {
          "route": "/services/mobile",
          "label": "Mobile"
        },
        {
          "route": "/services/web",
          "label": "Web"
        },
        {
          "route": "/services/devops",
          "label": "DevOps"
        },
        {
          "route": "/services/#recruitment-staffing",
          "label": "Recruitment and Staffing"
        },
        {
          "route": "/services/salesforce",
          "label": "Salesforce"
        }
      ]
    },
    {
      "route": "/results",
      "label": "Results",
      "childs": [
        {
          "route": "/results#clients",
          "label": "Clients & Testimonial"
        },
        {
          "route": "/results",
          "label": "Select Case Studies"
        }
      ]
    },
    {
      "route": "/the-primoko-difference",
      "label": "The Primoko Difference",
      "childs": [
        {
          "route": "/the-primoko-difference",
          "label": "Overview"
        },
        {
          "route": "/the-primoko-difference/process",
          "label": "Process"
        },
        {
          "route": "/the-primoko-difference/pricing",
          "label": "Pricing"
        },
        {
          "route": "/the-primoko-difference/manifesto",
          "label": "Manifesto"
        },
        // {
        //   "route": "/the-primoko-difference/faq",
        //   "label": "FAQs"
        // }
      ]
    }
  ]
}

export default NavMeta;