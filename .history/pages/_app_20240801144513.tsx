import { useRouter } from 'next/router'
import RootLayout from "../app/layout"

export default function MonAppli({ Component, pageProps }: AppProps) {
    const router = useRouter()
    return (
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    )
  }

  export default MonAppli