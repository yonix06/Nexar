import Document, { Head, Html, Main, NextScript } from 'next/document'
import RootLayout from "./layout"


export default function MonAppli({ Component, pageProps }) {
    return (
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    )
  }
  
