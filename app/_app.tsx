// app/_app.tsx

import RootLayout from "../app/layout"

export default function MyApp({ Component, pageProps } : any) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}