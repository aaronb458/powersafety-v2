export const formsConfig = {
  brand: {
    companyName: "Power Safety Service, LLC",
    legalEntity: "Power Safety Service, LLC",
    tagline: "The All-Star Team of California Traffic Control Services",
    location: "Lodi, CA",
    foundedYear: 2025,
    description:
      "Full-service traffic control for Northern California. Traffic control, flagging, traffic control plans, permits, equipment rentals, fire watch, and special event traffic management.",
    url: "https://powersafety.com",
  },
  contact: {
    phone: "(916) 573-7133",
    phoneHref: "tel:+19165737133",
    email: "info@powersafety.com",
    address: "2600 Reynolds Parkway, STE 140, PMB 175, Lodi, CA 95240",
    hours: "24/7",
    emergencyNote: "24/7 availability",
  },
  credentials: [
    { name: "ATSSA", label: "ATSSA Certified" },
    { name: "IBEW 1245", label: "IBEW Local 1245" },
    { name: "PE/TE", label: "Licensed PE & TE Engineers" },
    { name: "SBE", label: "SBE Certified" },
    { name: "MUTCD", label: "MUTCD Compliant" },
    { name: "Caltrans", label: "Caltrans Compliant" },
  ],
  analytics: {
    ga4: "GT-P85WJ23R",
  },
  webhooks: {
    contactFormEnvVar: "GOHIGHLEVEL_CONTACT_WEBHOOK_URL",
    quoteFormEnvVar: "GOHIGHLEVEL_QUOTE_WEBHOOK_URL",
    careersFormEnvVar: "GOHIGHLEVEL_CAREERS_WEBHOOK_URL",
    source: "Power Safety Website",
  },
  seo: {
    home: {
      title: "Power Safety Service | Northern California Traffic Control Services",
      description:
        "Full-service traffic control for Northern California. Traffic control, flagging, traffic control plans, permits, equipment rentals, fire watch, and special event traffic management. ATSSA certified. Call (916) 573-7133.",
    },
    services: {
      title: "Traffic Control Services | Power Safety Service",
      description:
        "Traffic control, ATSSA-certified flagging, engineer-stamped traffic control plans, permits, equipment rentals, fire watch, and event traffic management across Northern California.",
    },
    about: {
      title: "About Power Safety Service | California Traffic Control",
      description:
        "Meet the team behind Northern California's trusted traffic control company. ATSSA certified, licensed PE and TE engineers, MUTCD and Caltrans compliant.",
    },
    locations: {
      title: "Service Areas | Power Safety Service - Northern California Coverage",
      description:
        "Power Safety Service provides traffic control across all of Northern California. Sacramento, San Jose, San Francisco, Oakland, Fresno, Stockton, Lodi, and statewide.",
    },
    contact: {
      title: "Contact Power Safety Service | (916) 573-7133",
      description:
        "Get in touch with Power Safety Service for traffic control in Northern California. Call, email, or send us a message.",
    },
    quote: {
      title: "Request a Quote | Power Safety Service Traffic Control",
      description:
        "Tell us about your project and get a traffic control quote within 24 hours. TCPs, flagging, closures, equipment rentals, and event management.",
    },
    careers: {
      title: "Careers at Power Safety Service | Traffic Control Jobs",
      description:
        "Join Northern California's top traffic control team. Competitive pay and a crew that treats you like family.",
    },
    faq: {
      title: "Frequently Asked Questions | Power Safety Service Traffic Control",
      description:
        "Answers to common questions about traffic control services, permits, flagging, equipment rentals, and working with Power Safety Service in Northern California.",
    },
  },
  hero: {
    badge: "ATSSA Certified | Northern California",
    headline: "Traffic Control Done Right. Every Lane. Every Time.",
    subtext:
      "Licensed PE and TE engineers. ATSSA-certified crews. From traffic control plans to full road closures, Power Safety Service keeps California's job sites moving safely.",
    primaryCta: "Request a Quote",
    primaryCtaHref: "/quote",
    secondaryCta: "Our Services",
    secondaryCtaHref: "/services",
  },
  services: [
    {
      id: "traffic-control",
      icon: "Construction",
      title: "Traffic Control",
      shortDescription:
        "Full-service traffic control solutions for construction, utility, and emergency projects across Northern California.",
      fullDescription:
        "Power Safety Service provides full-service traffic control for construction, utility, and emergency projects across Northern California. Our crews are trained and equipped to handle everything from simple lane closures to complex multi-phase detour plans and freeway shutdowns.",
      features: [
        "Construction zone traffic control",
        "Utility project traffic management",
        "Emergency traffic control response",
        "Lane closures and shoulder work",
        "Complex multi-phase detour plans",
      ],
      cta: "Request a Traffic Control Quote",
    },
    {
      id: "flagging-services",
      icon: "Flag",
      title: "Flagging Services",
      shortDescription:
        "ATSSA-certified flaggers for construction zones, utility work, road work, and special events.",
      fullDescription:
        "Power Safety Service provides ATSSA-certified flaggers for construction zones, utility work, road work, and special events throughout Northern California. Our flaggers are professionally trained to keep workers and the public safe.",
      features: [
        "ATSSA-certified flaggers",
        "Construction zone flagging",
        "Utility project flagging",
        "Road work and maintenance flagging",
        "Special event traffic flagging",
      ],
      cta: "Get a Flagging Quote",
    },
    {
      id: "traffic-plans",
      icon: "FileCheck",
      title: "Traffic Control Plans",
      shortDescription:
        "Engineer-stamped, MUTCD and Caltrans-compliant TCP design by licensed PE and TE engineers.",
      fullDescription:
        "Every road project starts with a plan. Power Safety Service's licensed Professional Engineers (P.E.) and Traffic Engineers (T.E.) design custom Traffic Control Plans (TCPs) that are MUTCD and Caltrans compliant. Every plan accounts for your site conditions, local jurisdiction requirements, and timeline.",
      features: [
        "Engineer-stamped TCP design",
        "Licensed PE and TE engineers on staff",
        "MUTCD and Caltrans compliant",
        "Custom plans for your project specifics",
        "Revisions included until approval",
      ],
      cta: "Request a Traffic Plan Quote",
    },
    {
      id: "permit-services",
      icon: "ClipboardCheck",
      title: "Permit Services",
      shortDescription:
        "City and county permit acquisition across California with 24-hour turnaround.",
      fullDescription:
        "Power Safety Service handles the entire permit process for your project. We work with cities and counties across California to secure the permits you need with 24-hour turnaround available. No delays, no runaround.",
      features: [
        "City and county permit acquisition",
        "24-hour turnaround available",
        "Encroachment permits",
        "Right-of-way permits",
        "Full paperwork handling",
      ],
      cta: "Get Permit Help",
    },
    {
      id: "equipment-rentals",
      icon: "Truck",
      title: "Equipment Rentals",
      shortDescription:
        "K-rail, arrow boards, PCMS signs, light towers, barricades, crash cushions, and more.",
      fullDescription:
        "Power Safety Service offers a full inventory of traffic control equipment for rent. From K-rail and arrow boards to PCMS signs, light towers, barricades, and crash cushions, we have the equipment your project needs.",
      features: [
        "K-rail and concrete barriers",
        "Arrow boards and PCMS signs",
        "Light towers",
        "Barricades and delineators",
        "Crash cushions and attenuators",
      ],
      cta: "Request Equipment Rental",
    },
    {
      id: "fire-watch",
      icon: "Flame",
      title: "Fire Watch Services",
      shortDescription:
        "Certified fire watch personnel for construction and hot work projects.",
      fullDescription:
        "Power Safety Service provides certified fire watch personnel for construction projects and hot work operations. Our fire watch team is trained to identify and prevent fire hazards on your job site.",
      features: [
        "Certified fire watch personnel",
        "Construction site fire monitoring",
        "Hot work fire watch",
        "Fire prevention compliance",
        "24/7 fire watch availability",
      ],
      cta: "Request Fire Watch",
    },
    {
      id: "event-management",
      icon: "CalendarCheck",
      title: "Special Event Traffic Control",
      shortDescription:
        "Traffic management for marathons, festivals, parades, film productions, and community events.",
      fullDescription:
        "Large-scale events demand professional traffic management. Power Safety Service works with event organizers to design and execute traffic plans that handle thousands of vehicles and pedestrians safely. We coordinate with local law enforcement, fire departments, and municipalities to ensure your event runs smoothly.",
      features: [
        "Marathons, parades, and running events",
        "Music festivals and outdoor concerts",
        "Film and television productions",
        "Community events and celebrations",
        "Complete permit coordination with local agencies",
      ],
      cta: "Plan Your Event Traffic",
    },
    {
      id: "night-work",
      icon: "Moon",
      title: "Night Work Traffic Control",
      shortDescription:
        "Specialized night work traffic control with high-visibility equipment and trained crews.",
      fullDescription:
        "Many road projects require night work to minimize disruption to daytime traffic. Power Safety Service provides specialized night work traffic control with high-visibility equipment, retroreflective signage, and crews trained for low-light operations. We keep your night projects safe and compliant.",
      features: [
        "High-visibility signage and equipment",
        "Retroreflective channelizing devices",
        "Trained night work crews",
        "Reduced-speed zone management",
        "Lighting and illumination equipment",
      ],
      cta: "Request Night Work Quote",
    },
    {
      id: "emergency-traffic-control",
      icon: "Siren",
      title: "Emergency Traffic Control",
      shortDescription:
        "24/7 emergency traffic control response for storm damage, accidents, and urgent road closures.",
      fullDescription:
        "When an emergency hits, Power Safety Service deploys fast. Our 24/7 emergency traffic control team responds to storm damage, accident scenes, and urgent road closure needs. We coordinate with law enforcement and emergency services to get the scene controlled and traffic moving safely.",
      features: [
        "24/7 emergency response",
        "Storm damage traffic control",
        "Accident scene management",
        "Urgent road closure coordination",
        "Law enforcement coordination",
      ],
      cta: "Emergency Line: (916) 573-7133",
    },
    {
      id: "film-production",
      icon: "Film",
      title: "Film Production Traffic Control",
      shortDescription:
        "Traffic control and road closures for film and television productions across California.",
      fullDescription:
        "Film and television productions require precise traffic control to keep cast, crew, and the public safe. Power Safety Service handles road closures, lane restrictions, and pedestrian management for productions of any size. We coordinate permits and work with local agencies to keep your shoot on schedule.",
      features: [
        "Film set road closures",
        "Lane restrictions for production vehicles",
        "Pedestrian management",
        "Permit coordination with local agencies",
        "Flexible scheduling for production timelines",
      ],
      cta: "Plan Your Production Traffic",
    },
  ],
  industries: [
    {
      icon: "HardHat",
      title: "Construction Companies",
      description:
        "Full-service traffic control for construction projects. We keep your site compliant and your crew safe.",
    },
    {
      icon: "Users",
      title: "Event Organizers",
      description:
        "Professional traffic management for marathons, festivals, parades, film productions, and community events.",
    },
    {
      icon: "Zap",
      title: "Public & Private Utilities",
      description:
        "Traffic control and flagging for utility work across Northern California. PG&E, SMUD, municipal water, and more.",
    },
    {
      icon: "Building2",
      title: "Municipalities",
      description:
        "Traffic control services for city and county road projects, street maintenance, and public works operations.",
    },
  ],
  whyChooseUs: [
    {
      title: "A Legacy of Excellence",
      description:
        "Decades of experience in traffic control. Our leadership team brings 50+ years of combined industry expertise to every project we take on.",
    },
    {
      title: "Unmatched Expertise",
      description:
        "ATSSA-certified crews, licensed Professional Engineers (P.E.) and Traffic Engineers (T.E.) on staff. State-certified and equipped for any project.",
    },
    {
      title: "Streamlined Permit Approvals",
      description:
        "We handle the entire permit process with city and county agencies. 24-hour turnaround available. No delays, no runaround. Your project stays on schedule.",
    },
    {
      title: "Strong Relationships",
      description:
        "Deep-rooted partnerships with municipalities, contractors, and utility companies across Northern California. Trust takes years to build. We protect it.",
    },
    {
      title: "Affordable Excellence",
      description:
        "Premium traffic control services at cost-effective rates. We deliver top-tier safety and compliance without the premium price tag.",
    },
    {
      title: "Top-Ranked Service",
      description:
        "California's leader in traffic control. Our reputation is built on consistent performance, reliability, and a commitment to safety on every project.",
    },
  ],
  about: {
    heroHeadline: "More Than a Company. We're Family.",
    heroSubtext:
      "Power Safety Service was built on a simple idea: California's workers and drivers deserve the best traffic control team in the state. Our team brings deep industry experience and a commitment to doing this work the right way.",
    story:
      "Founded by a seasoned leader with decades of experience in traffic control, Power Safety Service launched with a mission to raise the standard for traffic control in Northern California. With additional industry veterans on the management team and 50+ years of combined experience, we assembled a team of ATSSA-certified professionals and licensed engineers. We invested in equipment and training. We built deep-rooted partnerships with cities, counties, and contractors across the state. The result is a team that operates like family: tight-knit, accountable, and relentless about getting it right.",
    values: [
      {
        title: "Safety First",
        description:
          "Every decision we make starts with one question: is this safe? Our crews are trained to the highest standards because lives depend on it.",
      },
      {
        title: "Relationships Matter",
        description:
          "We have built partnerships with cities, counties, contractors, and utility companies across Northern California. Trust takes years to build. We protect it.",
      },
      {
        title: "Excellence Is the Standard",
        description:
          "Good enough is not good enough. We hold ourselves to the highest standard on every project, every plan, every closure.",
      },
    ],
    certifications: [
      {
        name: "ATSSA",
        fullName: "American Traffic Safety Services Association",
      },
      {
        name: "PE/TE",
        fullName: "Licensed Professional & Traffic Engineers",
      },
    {
      name: "IBEW 1245",
      fullName: "International Brotherhood of Electrical Workers",
    },
      { name: "SBE", fullName: "Small Business Enterprise" },
      { name: "Caltrans", fullName: "Caltrans Compliant" },
    ],
  },
  locations: {
    headline: "Serving All of California",
    subtext:
      "Power Safety Service operates across Northern California with statewide coverage available. Full services at every location.",
    description:
      "Power Safety Service serves all of Northern California including Sacramento, San Jose, San Francisco, Oakland, Fresno, Stockton, Modesto, Lodi, and 100+ cities. We cover within 100 miles of every major Northern California city. Statewide California coverage available.",
    note: "100+ cities served and growing. New satellite locations added monthly. Contact us about service in your area.",
    cta: "Have a project in California? Let's talk.",
    regions: [
      "Sacramento",
      "San Jose",
      "San Francisco",
      "Oakland",
      "Fresno",
      "Stockton",
      "Modesto",
      "Lodi",
      "Yreka",
      "Statewide",
    ],
    cityPages: [
      {
        slug: "traffic-control-sacramento",
        city: "Sacramento",
        region: "Sacramento Valley",
        title: "Traffic Control Services in Sacramento, CA | Power Safety Service",
        description: "Professional traffic control services in Sacramento, CA. ATSSA-certified flagging, traffic control plans, permits, equipment rentals, and 24/7 emergency response. Call (916) 573-7133.",
        content: "Power Safety Service provides full-service traffic control in Sacramento and the greater Sacramento Valley region. From state highway projects to downtown construction zones, our ATSSA-certified crews handle everything from lane closures to complex detour plans. Sacramento is our home base, and we know the streets, the agencies, and the permitting requirements inside and out.",
      },
      {
        slug: "traffic-control-fresno",
        city: "Fresno",
        region: "Central Valley",
        title: "Traffic Control Services in Fresno, CA | Power Safety Service",
        description: "Professional traffic control services in Fresno, CA. ATSSA-certified flagging, traffic control plans, permits, and equipment rentals. Call (916) 573-7133.",
        content: "Power Safety Service provides full-service traffic control in Fresno and throughout the Central Valley. Our teams are experienced with agricultural corridor road work, highway projects, and municipal street maintenance in the Fresno metro area. Licensed engineers, ATSSA-certified flaggers, and a full equipment inventory.",
      },
      {
        slug: "traffic-control-san-jose",
        city: "San Jose",
        region: "South Bay / Silicon Valley",
        title: "Traffic Control Services in San Jose, CA | Power Safety Service",
        description: "Professional traffic control services in San Jose, CA. ATSSA-certified flagging, traffic control plans, permits, and equipment rentals. Call (916) 573-7133.",
        content: "Power Safety Service provides full-service traffic control in San Jose and the greater Silicon Valley region. Our crews manage traffic for construction projects, utility work, and special events throughout the South Bay. From highway interchange projects to downtown lane closures, we have the experience and equipment to get it done safely.",
      },
      {
        slug: "traffic-control-san-francisco",
        city: "San Francisco",
        region: "Bay Area",
        title: "Traffic Control Services in San Francisco, CA | Power Safety Service",
        description: "Professional traffic control services in San Francisco, CA. ATSSA-certified flagging, traffic control plans, permits, and equipment rentals. Call (916) 573-7133.",
        content: "Power Safety Service provides full-service traffic control in San Francisco and throughout the Bay Area. We handle the unique challenges of urban traffic management, including tight streets, high pedestrian volumes, and complex multi-agency permit requirements. Our teams coordinate with SFMTA, Caltrans, and local agencies to keep your project on schedule.",
      },
      {
        slug: "traffic-control-yreka",
        city: "Yreka",
        region: "Northern California",
        title: "Traffic Control Services in Yreka, CA | Power Safety Service",
        description: "Professional traffic control services in Yreka and Siskiyou County, CA. ATSSA-certified flagging, traffic control plans, and equipment rentals. Call (916) 573-7133.",
        content: "Power Safety Service provides full-service traffic control in Yreka and throughout Siskiyou County. Our teams handle highway projects, mountain road work, and rural traffic control in Northern California's most remote areas. We bring the same ATSSA-certified quality and licensed engineering to every project, no matter how far north.",
      },
    ],
  },
  ctaBanner: {
    headline: "Ready to Get Your Project Moving?",
    subtext:
      "Tell us about your traffic control needs and we will have a plan in your hands within 24 hours.",
    cta: "Request a Quote",
    ctaHref: "/quote",
    phone: "Or call us: (916) 573-7133",
  },
  serviceOptions: [
    "Traffic Control",
    "Flagging Services",
    "Traffic Control Plan (TCP)",
    "Permit Services",
    "Equipment Rental",
    "Fire Watch",
    "Special Event Traffic Control",
    "Night Work Traffic Control",
    "Emergency Traffic Control",
    "Film Production Traffic Control",
  ],
  forms: {
    contact: {
      heading: "Get in Touch",
      subtext:
        "Have a question or need more info? Drop us a line and we will get back to you fast.",
      buttonText: "Send Message",
      successMessage:
        "Thanks for reaching out. We will get back to you within one business day.",
      errorMessage: "Something went wrong. Give us a call at (916) 573-7133.",
      fields: {
        bestTimeOptions: ["Morning", "Afternoon", "Evening"],
        referralOptions: ["Google", "Referral", "Social Media", "Industry Event", "Other"],
      },
    },
    quote: {
      heading: "Request a Quote",
      subtext:
        "Tell us about your project and we will have a quote back to you within 24 hours.",
      buttonText: "Submit Quote Request",
      successMessage:
        "Quote request received. Our team will review your project details and follow up within 24 hours.",
      errorMessage: "Something went wrong. Give us a call at (916) 573-7133.",
      fields: {
        durationOptions: ["1 Day", "2-3 Days", "1 Week", "2-4 Weeks", "1-3 Months", "3+ Months"],
        serviceOptions: [
          "Traffic Control",
          "Flagging Services",
          "Traffic Control Plan (TCP)",
          "Permit Services",
          "Equipment Rental",
          "Fire Watch",
          "Special Event Traffic Control",
          "Night Work Traffic Control",
          "Emergency Traffic Control",
          "Film Production Traffic Control",
        ],
        referralOptions: ["Google", "Referral", "Social Media", "Industry Event", "Other"],
      },
    },
    careers: {
      heading: "Join the Power Safety Team",
      subtext:
        "We are always looking for experienced traffic control professionals. Apply below.",
      buttonText: "Submit Application",
      successMessage:
        "Application received. We will review your qualifications and reach out if there is a fit.",
      errorMessage: "Something went wrong. Email us at info@powersafety.com.",
      fields: {
        positionOptions: ["Flagger", "Traffic Control Technician", "Traffic Engineer", "Fire Watch", "Equipment Operator", "Project Manager", "Administrative", "Other"],
        availabilityOptions: ["Immediately", "2 Weeks", "1 Month", "Flexible"],
        certificationOptions: ["ATSSA Certified", "Other Certification", "No Certification"],
        experienceOptions: ["None", "Less than 1 Year", "1-3 Years", "3-5 Years", "5-10 Years", "10+ Years"],
        educationOptions: ["High School/GED", "Some College", "Associate's Degree", "Bachelor's Degree", "Other"],
        referralOptions: ["Google", "Referral", "Union Hall", "Job Board", "Social Media", "Other"],
      },
    },
  },
  faq: [
    {
      question: "What areas do you serve?",
      answer: "Power Safety Service serves all of Northern California including Sacramento, San Jose, San Francisco, Oakland, Fresno, Stockton, Modesto, Lodi, and 100+ cities. We cover within 100 miles of every major Northern California city. Statewide coverage is available for larger projects.",
    },
    {
      question: "Are your flaggers certified?",
      answer: "Yes. All Power Safety flaggers are ATSSA-certified (American Traffic Safety Services Association). This is the gold standard in traffic safety certification. Our crews receive ongoing training to stay current with the latest safety standards and regulations.",
    },
    {
      question: "Do you provide traffic control plans?",
      answer: "Yes. Power Safety Service has licensed Professional Engineers (P.E.) and Traffic Engineers (T.E.) on staff who design custom Traffic Control Plans (TCPs). Every plan is engineer-stamped, MUTCD-compliant, and Caltrans-compliant. We include revisions until your plan is approved.",
    },
    {
      question: "How fast can you get permits?",
      answer: "We offer 24-hour permit turnaround for most jurisdictions. Power Safety handles the entire permit process with city and county agencies across California, including encroachment permits and right-of-way permits. No delays, no runaround.",
    },
    {
      question: "Do you handle emergency traffic control?",
      answer: "Yes. Power Safety Service is available 24 hours a day, 7 days a week, 365 days a year for emergency traffic control. We respond to storm damage, accident scenes, and urgent road closures. Call (916) 573-7133 for immediate dispatch.",
    },
    {
      question: "What equipment do you rent?",
      answer: "We offer a full inventory of traffic control equipment including K-rail, arrow boards, PCMS signs, light towers, barricades, delineators, crash cushions, and attenuators. All equipment is maintained and ready to deploy.",
    },
    {
      question: "Do you work at night?",
      answer: "Yes. Power Safety Service provides specialized night work traffic control with high-visibility equipment, retroreflective signage, and crews trained for low-light operations. Many of our projects are night work to minimize disruption to daytime traffic.",
    },
    {
      question: "Are you available for film productions?",
      answer: "Yes. We provide traffic control and road closures for film and television productions across California. Our team handles permits, road closures, lane restrictions, and pedestrian management on flexible production schedules.",
    },
    {
      question: "What certifications does Power Safety hold?",
      answer: "Power Safety Service is ATSSA-certified, SBE-certified (Small Business Enterprise), and has licensed P.E. and T.E. engineers on staff. All work is MUTCD and Caltrans compliant.",
    },
    {
      question: "How do I get a quote?",
      answer: "You can request a quote through our website at powersafety.com/quote, call us at (916) 573-7133, or email info@powersafety.com. We typically respond within 24 hours with a detailed quote for your project.",
    },
  ],
  nav: [
    { name: "Services", href: "/services" },
    { name: "Locations", href: "/locations" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Power Safety Service, LLC",
    description:
      "Full-service traffic control for Northern California. Traffic control, flagging, traffic control plans, permits, equipment rentals, fire watch, and special event traffic management.",
    telephone: "(916) 573-7133",
    email: "info@powersafety.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2600 Reynolds Parkway, STE 140, PMB 175",
      addressLocality: "Lodi",
      addressRegion: "CA",
      postalCode: "95240",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.1341,
      longitude: -121.2722,
    },
    url: "https://powersafety.com",
    areaServed: {
      "@type": "State",
      name: "California",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "ATSSA Certified",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "SBE Certified",
      },
    ],
    memberOf: [
      { "@type": "Organization", name: "ATSSA" },
    ],
  },
} as const;
