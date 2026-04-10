export type Shop = {
  slug: string;
  name: string;
  category: string;
  location: string;
  note: string;
  description: string;
  bestFor: string;
  region: string;
  focus: string;
  trust: string;
  pricing: string;
  stock: string;
  appeal: string;
};

export const shops: Record<string, Shop> = {
  "chaos-cards": {
    slug: "chaos-cards",
    name: "Chaos Cards",
    category: "Mainstream sealed",
    location: "UK",
    note: "Well-known card retailer with broad Pokémon and TCG coverage.",
    description:
      "Well-known UK retailer with strong sealed stock and broad TCG coverage.",
    bestFor: "Sealed products",
    region: "UK",
    focus: "Pokémon and TCGs",
    trust: "8.9",
    pricing: "8.2",
    stock: "9.1",
    appeal: "8.4",
  },
  "magic-madhouse": {
    slug: "magic-madhouse",
    name: "Magic Madhouse",
    category: "Broad TCG range",
    location: "UK",
    note: "Strong selection across Pokémon, Yu-Gi-Oh, Magic, and accessories.",
    description:
      "Major UK card retailer with wide product coverage across multiple TCGs.",
    bestFor: "Broad TCG range",
    region: "UK",
    focus: "Mainstream card games",
    trust: "8.8",
    pricing: "8.1",
    stock: "9.3",
    appeal: "8.3",
  },
  "obsidia-distribution": {
    slug: "obsidia-distribution",
    name: "Obsidia Distribution",
    category: "Japanese sealed",
    location: "UK",
    note: "Strong for Japanese booster boxes and harder-to-find sealed products.",
    description:
      "Obsidia Distribution is a strong option for Japanese sealed products and harder-to-find collector-focused releases.",
    bestFor: "Japanese sealed",
    region: "UK",
    focus: "Japanese products",
    trust: "8.5",
    pricing: "8.0",
    stock: "8.7",
    appeal: "8.8",
  },
  "karnage-collectables": {
    slug: "karnage-collectables",
    name: "Karnage Collectables",
    category: "Collector picks",
    location: "UK",
    note: "More collector-focused stock with quick-moving items.",
    description:
      "Karnage Collectables is more collector-focused, with appealing stock for buyers looking beyond the most obvious mainstream products.",
    bestFor: "Collector-focused products",
    region: "UK",
    focus: "Collector picks",
    trust: "8.4",
    pricing: "8.0",
    stock: "8.2",
    appeal: "8.7",
  },
};