// app/_app.tsx
import {NextUIProvider} from "@nextui-org/react"
import * as React from "react"
import RootLayout from "../app/layout"

export default function Squelette({ Component, pageProps } : any) {
  return (
    <NextUIProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </NextUIProvider>
  )
}
