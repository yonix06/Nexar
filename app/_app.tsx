// app/_app.tsx

import RootLayout from "../app/layout"

export default function Squelette({ Component, pageProps } : any) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}
