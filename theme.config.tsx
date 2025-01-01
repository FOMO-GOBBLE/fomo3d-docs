// theme.config.tsx
import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';

const config: DocsThemeConfig = {
  logo: <span>FOMO3D Docs</span>,
  /*project: {
    link: 'https://github.com/johnforfar/fomo3d-docs/tree/nextra',
  },*/
  docsRepositoryBase: 'https://github.com/johnforfar/fomo3d-docs/tree/nextra',
  darkMode: true,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  navbar: {
    extraContent: (
      <>
        <a 
          href="https://t.me/fomo3dGobbler" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-block',
            marginRight: '16px',
            verticalAlign: 'middle'
          }}
        >
          <FaTelegramPlane size={24} />
        </a>
        <a 
          href="https://x.com/solanaDOTfun" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-block',
            verticalAlign: 'middle'
          }}
        >
          <FaTwitter size={24} />
        </a>
      </>
    )
  },
  footer: {
    content: 'FOMO3D Docs'
  },
  // Setting navigation to false to disable any default navigation items
  navigation: false
}

export default config