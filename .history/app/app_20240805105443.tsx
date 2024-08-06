import { useRouter } from 'next/router'
import MyDocument from './document'
import RootLayout from "./layout"
import Document, { Html, Head, Main, NextScript } from 'next/document'


export default function MonAppli({ Component, pageProps }) {
    return (
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    )
  }
  
