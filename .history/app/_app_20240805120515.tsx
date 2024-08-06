import MyDocument from "./_document"
import RootLayout from "./layout"

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