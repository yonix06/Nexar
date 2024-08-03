// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document'
import RegisterUser

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument