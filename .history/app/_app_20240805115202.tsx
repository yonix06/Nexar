import RootLayout from "../app/layout"
import MyDocument from "./_document"

export default function App({ Component, pageProps }) {
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