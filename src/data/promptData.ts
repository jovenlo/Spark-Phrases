
export interface PromptCategory {
  id: string;
  name: string;
  description: string;
  templates: string[];
}

export const promptCategories: PromptCategory[] = [
  {
    id: "creative-writing",
    name: "Creative Writing",
    description: "Unleash your imagination with prompts designed to inspire stories, poems, and more.",
    templates: [
      "Write a story about a time [character] found a [object] in a [location].",
      "Compose a poem about the feeling of [emotion] on a [weather] day.",
      "Imagine you are a [occupation]. Describe a typical day in your life.",
      "Create a scene where two characters argue about [topic] in a [setting].",
      "Write a short story that begins with the sentence: 'It was the day the [animal] spoke.'"
    ]
  },
  {
    id: "business",
    name: "Business",
    description: "Generate innovative ideas for marketing, strategy, and problem-solving in the business world.",
    templates: [
      "Develop a marketing campaign for a new [product] targeting [demographic].",
      "Outline a strategy to improve [company]'s [area] by [percentage] within [timeframe].",
      "Brainstorm solutions to address [problem] in the [industry].",
      "Create a business plan for a [business model] startup focused on [niche].",
      "Design a customer retention program for a [service] company."
    ]
  },
  {
    id: "art",
    name: "Art",
    description: "Explore artistic expression with prompts that challenge you to create unique visual and auditory pieces.",
    templates: [
      "Create a [style] painting of a [subject] in a [environment].",
      "Compose a [genre] musical piece inspired by [concept].",
      "Design a [material] sculpture that represents [theme].",
      "Write a script for a short film about [plot] set in [location].",
      "Develop a series of photographs exploring the theme of [abstract concept]."
    ]
  },
  {
    id: "ai",
    name: "AI",
    description: "Craft prompts for AI models to generate creative and insightful content.",
    templates: [
      "Write a blog post about the future of [technology] in [industry].",
      "Generate a conversation between an AI and a [historical figure] about [topic].",
      "Create a summary of [scientific paper] for a [target audience].",
      "Develop a fictional world with unique [species] and [environment features] using AI.",
      "Write a poem in the style of [poet] about [subject] using AI."
    ]
  }
];

export const placeholders: Record<string, { name: string; examples: string[] }> = {
  "[genre]": {
    name: "Genre",
    examples: [
      "fantasy",
      "science fiction",
      "romance",
      "mystery",
      "thriller",
      "horror",
      "historical fiction",
      "young adult",
      "dystopian",
      "cyberpunk",
      "steampunk",
      "western",
      "urban fantasy",
      "paranormal",
      "comedy",
      "drama",
      "action-adventure",
      "magical realism"
    ]
  },
  "[character]": {
    name: "Character",
    examples: [
      "a brave knight",
      "a curious child",
      "a wise old woman",
      "a mischievous fairy",
      "a daring pirate",
      "a brilliant scientist",
      "a struggling artist",
      "a lonely astronaut",
      "a talking animal",
      "a time traveler"
    ]
  },
  "[object]": {
    name: "Object",
    examples: [
      "a mysterious map",
      "a shimmering jewel",
      "an ancient artifact",
      "a broken compass",
      "a magical potion",
      "a rusty key",
      "a hidden diary",
      "a strange device",
      "a talking mirror",
      "a powerful weapon"
    ]
  },
  "[location]": {
    name: "Location",
    examples: [
      "a haunted castle",
      "a dense forest",
      "a bustling city",
      "a deserted island",
      "a hidden cave",
      "a futuristic space station",
      "an underwater kingdom",
      "a parallel universe",
      "a dream world",
      "a forgotten temple"
    ]
  },
  "[emotion]": {
    name: "Emotion",
    examples: [
      "joy",
      "sorrow",
      "anger",
      "fear",
      "love",
      "hope",
      "despair",
      "excitement",
      "peace",
      "longing"
    ]
  },
  "[weather]": {
    name: "Weather",
    examples: [
      "sunny",
      "rainy",
      "stormy",
      "snowy",
      "windy",
      "foggy",
      "cloudy",
      "misty",
      "clear",
      "overcast"
    ]
  },
  "[occupation]": {
    name: "Occupation",
    examples: [
      "teacher",
      "doctor",
      "engineer",
      "chef",
      "artist",
      "writer",
      "musician",
      "detective",
      "athlete",
      "programmer"
    ]
  },
  "[topic]": {
    name: "Topic",
    examples: [
      "politics",
      "religion",
      "love",
      "money",
      "family",
      "friendship",
      "technology",
      "environment",
      "education",
      "art"
    ]
  },
  "[setting]": {
    name: "Setting",
    examples: [
      "a coffee shop",
      "a park",
      "a library",
      "a courtroom",
      "a spaceship",
      "a battlefield",
      "a hospital",
      "a school",
      "a concert hall",
      "a museum"
    ]
  },
  "[animal]": {
    name: "Animal",
    examples: [
      "dog",
      "cat",
      "bird",
      "lion",
      "tiger",
      "elephant",
      "dolphin",
      "snake",
      "dragon",
      "unicorn"
    ]
  },
  "[product]": {
    name: "Product",
    examples: [
      "smartphone",
      "electric car",
      "smartwatch",
      "coffee maker",
      "fitness app",
      "online course",
      "eco-friendly product",
      "virtual reality headset",
      "AI assistant",
      "sustainable clothing line"
    ]
  },
  "[demographic]": {
    name: "Demographic",
    examples: [
      "teenagers",
      "young adults",
      "parents",
      "seniors",
      "students",
      "professionals",
      "gamers",
      "travelers",
      "pet owners",
      "environmentalists"
    ]
  },
  "[company]": {
    name: "Company",
    examples: [
      "a tech startup",
      "a retail chain",
      "a healthcare provider",
      "an educational institution",
      "a non-profit organization",
      "a consulting firm",
      "a manufacturing company",
      "a marketing agency",
      "a financial institution",
      "a real estate company"
    ]
  },
  "[area]": {
    name: "Area",
    examples: [
      "customer satisfaction",
      "employee productivity",
      "sales revenue",
      "brand awareness",
      "operational efficiency",
      "market share",
      "innovation rate",
      "customer retention",
      "cost reduction",
      "employee engagement"
    ]
  },
  "[percentage]": {
    name: "Percentage",
    examples: [
      "10%",
      "20%",
      "30%",
      "40%",
      "50%",
      "60%",
      "70%",
      "80%",
      "90%",
      "100%"
    ]
  },
  "[timeframe]": {
    name: "Timeframe",
    examples: [
      "3 months",
      "6 months",
      "1 year",
      "2 years",
      "5 years",
      "10 years",
      "1 quarter",
      "2 quarters",
      "3 quarters",
      "4 quarters"
    ]
  },
  "[problem]": {
    name: "Problem",
    examples: [
      "low customer engagement",
      "high employee turnover",
      "inefficient processes",
      "lack of innovation",
      "poor communication",
      "declining sales",
      "increasing costs",
      "stagnant growth",
      "negative reviews",
      "supply chain disruptions"
    ]
  },
  "[industry]": {
    name: "Industry",
    examples: [
      "healthcare",
      "education",
      "technology",
      "finance",
      "retail",
      "manufacturing",
      "hospitality",
      "transportation",
      "energy",
      "agriculture"
    ]
  },
  "[business model]": {
    name: "Business Model",
    examples: [
      "subscription-based",
      "e-commerce",
      "freemium",
      "marketplace",
      "advertising-based",
      "affiliate marketing",
      "direct sales",
      "franchise",
      "crowdfunding",
      "peer-to-peer"
    ]
  },
  "[niche]": {
    name: "Niche",
    examples: [
      "sustainable products",
      "personalized services",
      "remote work solutions",
      "virtual events",
      "online education",
      "health and wellness",
      "pet care",
      "eco-tourism",
      "ethical fashion",
      "plant-based food"
    ]
  },
  "[service]": {
    name: "Service",
    examples: [
      "customer support",
      "delivery",
      "consulting",
      "training",
      "maintenance",
      "repair",
      "cleaning",
      "security",
      "financial planning",
      "legal advice"
    ]
  },
  "[style]": {
    name: "Style",
    examples: [
      "abstract",
      "realism",
      "impressionism",
      "surrealism",
      "pop art",
      "cubism",
      "expressionism",
      "minimalism",
      "art deco",
      "renaissance"
    ]
  },
  "[subject]": {
    name: "Subject",
    examples: [
      "landscape",
      "portrait",
      "still life",
      "abstract form",
      "historical event",
      "mythological scene",
      "urban scene",
      "fantasy creature",
      "geometric pattern",
      "natural phenomenon"
    ]
  },
  "[environment]": {
    name: "Environment",
    examples: [
      "forest",
      "beach",
      "mountain",
      "city",
      "desert",
      "underwater",
      "space",
      "garden",
      "arctic",
      "jungle"
    ]
  },
  "[concept]": {
    name: "Concept",
    examples: [
      "love",
      "loss",
      "hope",
      "despair",
      "freedom",
      "justice",
      "peace",
      "war",
      "nature",
      "technology"
    ]
  },
  "[material]": {
    name: "Material",
    examples: [
      "bronze",
      "marble",
      "wood",
      "glass",
      "steel",
      "clay",
      "stone",
      "plastic",
      "ice",
      "sand"
    ]
  },
  "[theme]": {
    name: "Theme",
    examples: [
      "transformation",
      "identity",
      "mortality",
      "redemption",
      "isolation",
      "connection",
      "power",
      "resilience",
      "memory",
      "legacy"
    ]
  },
  "[plot]": {
    name: "Plot",
    examples: [
      "a journey of self-discovery",
      "a quest for revenge",
      "a love story",
      "a battle against evil",
      "a search for truth",
      "a struggle for survival",
      "a tale of betrayal",
      "a story of redemption",
      "a fight for freedom",
      "a quest for knowledge"
    ]
  },
  "[environment features]": {
    name: "Environment Features",
    examples: [
      "floating islands",
      "bioluminescent plants",
      "sentient weather",
      "inverted gravity",
      "time distortions",
      "living architecture",
      "crystalline structures",
      "perpetual twilight",
      "dimensional portals",
      "memory pools"
    ]
  },
  "[abstract concept]": {
    name: "Abstract Concept",
    examples: [
      "time",
      "space",
      "energy",
      "matter",
      "consciousness",
      "reality",
      "illusion",
      "perception",
      "existence",
      "nothingness"
    ]
  },
  "[technology]": {
    name: "Technology",
    examples: [
      "artificial intelligence",
      "virtual reality",
      "augmented reality",
      "blockchain",
      "quantum computing",
      "biotechnology",
      "nanotechnology",
      "renewable energy",
      "space exploration",
      "robotics"
    ]
  },
  "[historical figure]": {
    name: "Historical Figure",
    examples: [
      "Albert Einstein",
      "Cleopatra",
      "Leonardo da Vinci",
      "Marie Curie",
      "Nelson Mandela",
      "William Shakespeare",
      "Abraham Lincoln",
      "Queen Elizabeth I",
      "Mahatma Gandhi",
      "Martin Luther King Jr."
    ]
  },
  "[scientific paper]": {
    name: "Scientific Paper",
    examples: [
      "a study on climate change",
      "a research on cancer treatment",
      "an analysis of economic inequality",
      "a survey on mental health",
      "an investigation of dark matter",
      "a report on renewable energy",
      "a review of artificial intelligence",
      "an examination of human behavior",
      "a study of genetic engineering",
      "an exploration of quantum physics"
    ]
  },
  "[target audience]": {
    name: "Target Audience",
    examples: [
      "high school students",
      "college graduates",
      "business professionals",
      "healthcare providers",
      "technology enthusiasts",
      "environmental activists",
      "art lovers",
      "history buffs",
      "science fiction fans",
      "general public"
    ]
  },
  "[species]": {
    name: "Species",
    examples: [
      "sentient plants",
      "crystal beings",
      "energy creatures",
      "cybernetic organisms",
      "telepathic mammals",
      "shape-shifting aliens",
      "time-traveling insects",
      "invisible predators",
      "symbiotic fungi",
      "aquatic humanoids"
    ]
  },
  "[poet]": {
    name: "Poet",
    examples: [
      "William Shakespeare",
      "Emily Dickinson",
      "Edgar Allan Poe",
      "Maya Angelou",
      "Walt Whitman",
      "Robert Frost",
      "Langston Hughes",
      "Sylvia Plath",
      "T.S. Eliot",
      "Pablo Neruda"
    ]
  }
};
