import RootLayout from "../app/layout"
import MyDocument from "./_document"

export default function MonAppli({ Component, pageProps }) {
  return (
    <html lang="en">
      <body>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </body>
    </html>
  )
}