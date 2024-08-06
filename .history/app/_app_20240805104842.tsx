import { useRouter } from 'next/router'
import MyDocument from './_document'
import RootLayout from "./_layout"
import Document, { Html, Head, Main, NextScript } from 'next/document'


export default function MonAppli({ Component, pageProps }) {
    const router = useRouter()
    const { explain, analyse } = router.query
    return (
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    )
  }
  
