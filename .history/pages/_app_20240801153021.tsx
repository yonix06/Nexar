import { useRouter } from 'next/router'
import RootLayout from "../app/layout"
import MyDocument from './_document'


export default function MonAppli({ Component, pageProps }) {
    const router = useRouter()
    const { explain, analyse } = router.query
    return (
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    )
  }
  
