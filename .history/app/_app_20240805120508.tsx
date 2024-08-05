import RootLayout from "./layout"
import MyDocument from "./_document"

export default function App({ Component, pageProps }) {
  return (
    <html lang="fr">
      <body>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </body>
    </html>
  )
}