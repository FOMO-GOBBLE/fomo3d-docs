import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>FOMO3D Docs</span>,
  project: {
    link: 'https://github.com/johnforfar/fomo3d-docs/tree/nextra',
  },
  docsRepositoryBase: 'https://github.com/johnforfar/fomo3d-docs/tree/nextra',
  darkMode: true,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  navbar: {
    extraContent: (
      <div className="flex items-center gap-4">
        <a 
          href="https://t.me/fomo3dGobbler" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Telegram
        </a>
        <a 
          href="https://x.com/solanaDOTfun" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
    )
  },
  footer: {
    content: 'FOMO3D Docs'
  }
}

export default config