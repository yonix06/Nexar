
import RootLayout from "../app/layout"
import MyDocument from "./_document"

export default function MonAppli({ Component, pageProps }: { Component: React.ComponentType<any>, pageProps: any }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}

