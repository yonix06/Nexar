
import MyDocument from "./_document"
import RootLayout from "./layout"

export default function MonAppli({ Component, pageProps }: { Component: React.ComponentType<any>, pageProps: any }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}

