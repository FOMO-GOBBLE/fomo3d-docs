// pages/_meta.ts
export default {
  index: {
    title: "Introduction",
  },
  "api-reference": {
    title: "API Reference",
    type: "folder",
    index: "fomo3d-api"
  },
  "getting-started": {
    title: "Getting Started",
    type: "folder",
    index: "introduction-to-fomo3d"
  },
  "introduction-to-fomo3d": {
    title: "Introduction to FOMO3D",
    type: "folder",
    index: "intro-to-fomo3d"
  },
  "fomo3d-launchpad": {
    title: "FOMO3D Launchpad",
    type: "folder",
    index: "fomo3d-overview"
  },
  "fomo3d-amm": {
    title: "FOMO3D AMM",
    type: "folder",
    index: "understanding-the-amm"
  },
  "security-and-audits": {
    title: "Security and Audits",
    type: "folder",
    index: "security-measures"
  },
  "technical-details": {
    title: "Technical Details",
    type: "folder",
    index: "smart-contract-architecture"
  },
  "developer-docs": {
    title: "Developer Docs",
    type: "folder",
    index: "api-reference"
  },
  resources: {
    title: "Resources",
    type: "folder",
    index: "glossary"
  },
  "contact-and-support": {
    title: "Contact & Support",
    type: "page"
  }
} as const;