import { useRouter } from 'next/router'
import RootLayout from "../app/layout"


export default function MonAppli({ Component, pageProps }) {
    const router = useRouter()
    const { pageProps } = router.query
    return (
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    )
  }
  
