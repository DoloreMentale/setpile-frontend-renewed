import type { IPageHeader } from "~/shared/base-page-layout/types";

export const pageHeaders: { [key: string]: IPageHeader } = {
  projects: {
    title: "Find local help or get side gig",
    search: [
      {
        id: "search-value",
        placeholder: "Title, skills, etc",
        label: "What",
      },
      {
        id: "search-location",
        placeholder: "Location",
        label: "Where",
      },
    ],
    benefits: [
      "Over 11 active projects",
      "Fast & easy communication with prospect partners",
    ],
    actions: [
      { text: "Create free account", type: "primary", link: "" },
      { text: "Post a project", type: "default", link: "" },
      { text: "Post a resume", type: "default", link: "" },
    ],
  },
  "live-inventories": {
    title: "See what is currently available",
    search: [
      {
        id: "search-value",
        placeholder: "Title, description, specification",
        label: "What",
      },
      {
        id: "search-location",
        placeholder: "Location",
        label: "Where",
      },
    ],
    benefits: [
      "Real-time availability update",
      "Top solar distributors",
      "Over 1249 products",
    ],
    actions: [{ text: "Create free account", type: "primary", link: "" }],
  },
  marketplace: {
    title: "Sell or Buy excess inventory",
    search: [
      {
        id: "search-value",
        placeholder: "Product",
        label: "What",
      },
      {
        id: "search-location",
        placeholder: "Location",
        label: "Where",
      },
    ],
    benefits: [
      "Real listings from real people",
      "Custom product search",
      "Exclusive deals",
    ],
    actions: [{ text: "Sell your products", type: "primary", link: "" }],
  },
  news: {
    title: "Read latest industry news",
    search: [
      {
        id: "search-value",
        placeholder: "Title",
        label: "What",
      },
    ],
    benefits: [
      "Browse by topic and date",
      "Join discussions in the comments",
      "Get weekly news digest",
    ],
    actions: [{ text: "Create free account", type: "primary", link: "" }],
  },
};
