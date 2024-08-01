import RootLayout from "../app/layout"

export default function MonAppli({ Component, pageProps }: AppProps) {
    return (
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    )
  }