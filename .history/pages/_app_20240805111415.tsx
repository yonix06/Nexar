
import RootLayout from "../app/layout"
import Document from "next/document"

export default function MonAppli({ Component, pageProps }) {
    return (
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    )
  }
  
