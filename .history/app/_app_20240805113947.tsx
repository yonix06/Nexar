
import RootLayout from "../app/layout"
import Document from "next/document"

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

