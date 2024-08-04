import { useRouter } from 'next/router'
import RootLayout from "../app/layout"


export default function MonAppli({ Component.any, pageProps }) {
    const router = useRouter()
    const { explain, analyse } = router.query
    return (
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    )
  }
  
