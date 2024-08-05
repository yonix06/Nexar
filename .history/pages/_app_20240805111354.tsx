
import RootLayout from "../app/layout"


export default function MonAppli({ Component, pageProps }) {
    return (
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    )
  }
  
