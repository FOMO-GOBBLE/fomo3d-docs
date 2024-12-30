import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>FOMO3D Docs</span>,
  project: {
    link: 'https://github.com/johnforfar/fomo3d-docs/tree/nextra',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/johnforfar/fomo3d-docs/tree/nextra',
  darkMode: true,
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  footer: {
    component: <footer>FOMO3D Docs</footer>
  },
}

export default config
