// pages/_app.jsx
import React from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/solfun-snapper-logo-black-on-green.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}