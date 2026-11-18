export type ServiceSlug = "kitchen" | "bathroom" | "flooring" | "painting";

export interface ServiceItem {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  summary: string;
  headline: string;
  description: string;
  timeline: string;
  warranty: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  deliverables: {
    name: string;
    detail: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Kitchens" | "Bathrooms" | "Flooring" | "Painting";
  location: string;
  scope: string;
  image: string;
  imageAlt: string;
  featuredSpan?: string;
}

export const SITE_INFO = {
  name: "Ashori Partners LLC",
  shortName: "Ashori Partners",
  tagline: "Residential Renovation & Interior Craftsmanship",
  phoneDisplay: "+1 (617) 290-0302",
  phoneHref: "tel:+16172900302",
  whatsappHref: "https://wa.me/16172900302",
  email: "ashoripartnersllc@gmail.com",
  emailHref: "mailto:ashoripartnersllc@gmail.com",
  location: "Boston, Massachusetts",
  serviceArea: "Greater Boston, Cambridge, Brookline, Newton, Somerville & Surrounding Communities",
  yearsConstruction: "20+",
  yearsBusiness: "10+",
  instagramHref: "https://www.instagram.com/ashoripartners_llc",
  facebookHref: "https://www.facebook.com/share/1MLtF4u2sV/?mibextid=wwXIfr",
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "kitchen",
    title: "Kitchen Renovations",
    shortTitle: "Kitchens",
    summary: "Custom cabinetry, quartz and stone countertops, tile backsplashes, and functional layouts tailored to daily living.",
    headline: "Kitchens Engineered for Daily Living and Lasting Value",
    description:
      "From cabinet installation and island millwork to under-cabinet lighting and tiled backsplashes, our team handles every phase with clean jobsite discipline and precise alignment.",
    timeline: "3 to 6 Weeks",
    warranty: "Licensed & Insured Craftsmanship",
    image: "/images/emerald-tile-kitchen.jpg",
    imageAlt: "Renovated modern kitchen with white cabinetry, matte black hardware, green subway tile backsplash, and warm oak flooring",
    highlights: [
      "Custom and semi-custom cabinetry installation",
      "Quartz, granite, and solid-surface countertops",
      "Ceramic and porcelain backsplash tilework",
      "Under-cabinet LED lighting and fixture integration",
    ],
    deliverables: [
      {
        name: "Cabinetry & Millwork Alignment",
        detail: "Laser-leveled upper and base cabinets, soft-close hardware, crown molding, and custom island framing.",
      },
      {
        name: "Backsplash & Surface Finish",
        detail: "Precision tile layout around outlets and hoods with clean grout lines and sealed edges.",
      },
      {
        name: "Flooring & Trim Integration",
        detail: "Seamless transitions between kitchen hardwood or tile and adjacent dining and hallway spaces.",
      },
    ],
  },
  {
    slug: "bathroom",
    title: "Bathroom Remodeling",
    shortTitle: "Bathrooms",
    summary: "Walk-in glass showers, recessed tile niches, waterproof membranes, vanities, and modern plumbing fixtures.",
    headline: "Calm, Waterproofed Bathrooms Built Without Shortcuts",
    description:
      "Great bathrooms start behind the tile. We pair proper waterproofing and substrate preparation with tight mitered edges, recessed niches, and frameless glass enclosures.",
    timeline: "2 to 4 Weeks",
    warranty: "Full Moisture & Tile Integrity",
    image: "/images/frameless-glass-shower.jpg",
    imageAlt: "Custom bathroom remodel featuring a frameless glass walk-in shower, vertical white tile walls, and brushed nickel hardware",
    highlights: [
      "Frameless glass walk-in shower enclosures",
      "Custom tiled shower niches and built-in benches",
      "Large-format porcelain floor and wall tiling",
      "Vanity, mirror, lighting, and ventilation upgrades",
    ],
    deliverables: [
      {
        name: "Waterproof Shower Systems",
        detail: "Sloped pans, continuous waterproof membranes, and flood-tested wet areas before a single tile is set.",
      },
      {
        name: "Architectural Tile & Niche Work",
        detail: "Balanced tile spacing, metal edge profiles, recessed shampoo niches, and precision grout finishing.",
      },
      {
        name: "Fixtures & Glass Installation",
        detail: "Brushed nickel or matte black trim kits, pressure-balanced valves, and heavy tempered glass doors.",
      },
    ],
  },
  {
    slug: "flooring",
    title: "Hardwood Flooring & Custom Stairs",
    shortTitle: "Flooring & Stairs",
    summary: "Wide-plank hardwood installation, floor refinishing, and architectural oak staircases with recessed step lighting.",
    headline: "Precision Hardwood Floors and Architectural Staircases",
    description:
      "Whether installing new wide-plank white oak across an entire residence or rebuilding a staircase with integrated warm LED step lighting, we deliver tight seams and durable finishes.",
    timeline: "1 to 3 Weeks",
    warranty: "Precision Leveling & Subfloor Prep",
    image: "/images/led-oak-staircase.jpg",
    imageAlt: "Custom white oak wooden staircase with recessed warm LED lighting beneath every tread and matching hardwood landing",
    highlights: [
      "Solid and engineered hardwood installation",
      "Custom hardwood treads, risers, and handrails",
      "Integrated low-voltage LED stair lighting",
      "Subfloor leveling, squeak elimination, and trim",
    ],
    deliverables: [
      {
        name: "Subfloor Prep & Acclimation",
        detail: "Moisture testing, fastener reinforcement, and floor flatness checks so boards stay quiet and true.",
      },
      {
        name: "Custom Stair Treads & Lighting",
        detail: "Bespoke oak treads, flush skirt boards, and concealed warm LED channels wired cleanly per step.",
      },
      {
        name: "Baseboards & Thresholds",
        detail: "Crisp mitered shoe molding, flush vents, and transitions that tie every room together.",
      },
    ],
  },
  {
    slug: "painting",
    title: "Interior Painting & Trim",
    shortTitle: "Interior Painting",
    summary: "Thorough surface preparation, crisp architectural casing and crown lines, and low-VOC satin and matte finishes.",
    headline: "Flawless Walls, Crisp Trimwork, Zero Paint Spatter",
    description:
      "Preparation determines how paint looks three years later. We mask every floor, skim-coat imperfections, sand between coats, and cut sharp lines around historic Boston woodwork.",
    timeline: "3 to 10 Days",
    warranty: "Clean-Site Protection Guarantee",
    image: "/images/dining-trim-paint.jpg",
    imageAlt: "Freshly painted dining room with sage gray walls, crisp white window casing, baseboards, and refinished hardwood flooring",
    highlights: [
      "Full drywall patching, skimming, and sanding",
      "Architectural trim, wainscoting, and door enameling",
      "High-durability kitchen and bath moisture paints",
      "Daily jobsite masking and spotless cleanup",
    ],
    deliverables: [
      {
        name: "Surface Prep & Skim Coating",
        detail: "Nail pops, hairline plaster cracks, and joint tape seams feathered smooth under raking light.",
      },
      {
        name: "Millwork & Door Enameling",
        detail: "Fine-finish sprayed or brushed urethane enamels on baseboards, window casings, and interior doors.",
      },
      {
        name: "Color Consistency & Coverage",
        detail: "Two full finish coats over tinted primer for deep, even color across natural and warm artificial light.",
      },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "oak-led-staircase",
    title: "Custom White Oak LED Staircase",
    category: "Flooring",
    location: "Greater Boston, MA",
    scope: "Custom oak treads, flush stringer trim, wide-plank landing, and recessed warm LED step illumination.",
    image: "/images/led-oak-staircase.jpg",
    imageAlt: "White oak staircase with warm recessed LED lighting under each tread",
    featuredSpan: "md:col-span-7 md:row-span-2",
  },
  {
    id: "emerald-subway-kitchen",
    title: "Forest Tile & Matte White Kitchen",
    category: "Kitchens",
    location: "Boston, MA",
    scope: "Full cabinetry installation, olive-green ceramic subway backsplash, quartz counters, and oak floor installation.",
    image: "/images/emerald-tile-kitchen.jpg",
    imageAlt: "Bright kitchen renovation with white shaker cabinets and green tile backsplash",
    featuredSpan: "md:col-span-5",
  },
  {
    id: "frameless-glass-bath",
    title: "Frameless Glass Walk-In Shower",
    category: "Bathrooms",
    location: "Brookline, MA",
    scope: "Stacked ceramic shower surround, brushed nickel hardware, custom shower pan, and frameless tempered glass enclosure.",
    image: "/images/frameless-glass-shower.jpg",
    imageAlt: "Modern walk-in shower with vertical ceramic tiles and frameless glass door",
    featuredSpan: "md:col-span-5",
  },
  {
    id: "two-tone-oak-kitchen",
    title: "Two-Tone White & Oak Kitchen",
    category: "Kitchens",
    location: "Newton, MA",
    scope: "Warm natural oak base cabinets, tall upper pantry storage, quartz countertops, and continuous hardwood floors.",
    image: "/images/two-tone-kitchen.jpg",
    imageAlt: "Two-tone kitchen with natural oak lower cabinets and tall white upper cabinets",
    featuredSpan: "md:col-span-4",
  },
  {
    id: "marble-niche-shower",
    title: "Veined Porcelain Niche Shower",
    category: "Bathrooms",
    location: "Cambridge, MA",
    scope: "Large-format stone-look tile walls, recessed stainless-trimmed niche, and dual overhead LED downlights.",
    image: "/images/marble-niche-shower.jpg",
    imageAlt: "Custom shower with veined porcelain wall tiles and built-in recessed shelf niche",
    featuredSpan: "md:col-span-4",
  },
  {
    id: "dining-casing-paint",
    title: "Classic Casing & Dining Refresh",
    category: "Painting",
    location: "Somerville, MA",
    scope: "Wall resurfacing, muted sage-gray wall finish, bright white architectural trimwork, and hardwood floor restoration.",
    image: "/images/dining-trim-paint.jpg",
    imageAlt: "Freshly painted dining room with crisp white casing and warm hardwood floors",
    featuredSpan: "md:col-span-4",
  },
  {
    id: "open-island-kitchen",
    title: "Open-Concept Island Kitchen",
    category: "Kitchens",
    location: "Boston, MA",
    scope: "Full island build, glass pendant lighting rough-in, stainless appliance integration, and wide-plank flooring.",
    image: "/images/open-kitchen-island.jpg",
    imageAlt: "Open kitchen with white quartz island and three glass pendant lights",
  },
  {
    id: "precision-cabinet-fit",
    title: "On-Site Cabinetry Fit & Trim",
    category: "Kitchens",
    location: "Boston, MA",
    scope: "Precision hinge calibration, crown molding joinery, and brass hardware installation inside a remodeled kitchen.",
    image: "/images/craftsman-cabinetry.jpg",
    imageAlt: "Ashori Partners craftsman installing white kitchen cabinet shelving with precision tools",
  },
];

export const STANDARDS = [
  {
    number: "01",
    title: "We Treat Your Home Like Our Own",
    description:
      "Dust barriers, floor protection runners, and end-of-day cleanup are standard on every job, never optional extras.",
  },
  {
    number: "02",
    title: "Licensed & Insured Professionals",
    description:
      "Full Massachusetts licensing and liability coverage give homeowners complete clarity and peace of mind from day one.",
  },
  {
    number: "03",
    title: "Stage-by-Stage Quality Control",
    description:
      "Every framing check, waterproofing layer, tile layout, and final paint coat is inspected before moving to the next phase.",
  },
  {
    number: "04",
    title: "20+ Years Construction Experience",
    description:
      "Over two decades of hands-on residential building experience paired with more than 10 years operating as an established firm.",
  },
  {
    number: "05",
    title: "Clear, Honest Communication",
    description:
      "Direct updates from the crew on site, transparent line-item estimates, and realistic timelines without surprise change orders.",
  },
  {
    number: "06",
    title: "Lasting Material Craftsmanship",
    description:
      "We specify proven primers, waterproof membranes, and hardware that hold up to New England seasons and daily family use.",
  },
];

export const FAQS = [
  {
    question: "What areas around Boston do you serve?",
    answer:
      "Ashori Partners LLC serves homeowners and property owners across Boston and surrounding communities including Brookline, Cambridge, Somerville, Newton, Quincy, and nearby Greater Boston neighborhoods.",
  },
  {
    question: "How do I request an estimate for my renovation?",
    answer:
      "Call us directly at +1 (617) 290-0302, message us on WhatsApp, or submit your project details in the estimate form below. We schedule an on-site walkthrough to measure the space, discuss materials, and provide a clear written scope.",
  },
  {
    question: "Are you licensed and insured for residential work?",
    answer:
      "Yes. Ashori Partners LLC is a licensed and insured residential remodeling company with over 20 years of construction experience and more than 10 years in business.",
  },
  {
    question: "Can I combine flooring, painting, and kitchen or bath upgrades together?",
    answer:
      "Yes. Many clients hire us to coordinate interior painting, hardwood flooring or stair upgrades, and kitchen or bathroom renovations under one schedule so finishes and transitions match seamlessly.",
  },
  {
    question: "How do you protect lived-in homes during a remodel?",
    answer:
      "Before demolition or sanding begins, we lay heavy-duty floor protection, seal doorways with dust containment, organize tools cleanly each evening, and haul away project debris responsibly.",
  },
];
