import { Html, Head, Main, NextScript } from 'next/document';

import { ColorSchemeScript, MantineProvider, DirectionProvider } from '@mantine/core';
//import { HotKeysHandler } from '../components/HotKeysHandler';
import { Search } from '../components/Search';
import { GaScript } from '../components/GaScript';
import { HotKeysHandler } from '../components/HotKeysHandler';

export default function Layout({ children, pageProps }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" localStorageKey="mantine-ui-color-scheme" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
        <meta name="og:image:width" content="1280" />
        <meta name="og:image:height" content="640" />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@mantinedev" />
        <meta name="og:image" content="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/social-preview.png" />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/social-preview.png" />
        <meta itemProp="image" content="http://raw.githubusercontent.com/mantinedev/mantine/master/.demo/social-preview.png" />
        <meta itemProp="description" content="120+ prebuilt components with Mantine" />
        <meta name="description" content="120+ prebuilt components with Mantine" />
      </head>
      <GaScript />
      <DirectionProvider initialDirection="ltr" detectDirection={false}>
        <body>
        <MantineProvider
          defaultColorScheme="auto"
        >
            <HotKeysHandler />
            {children}
            <Search data={pageProps.allComponents} />
        </MantineProvider>
        </body>
      </DirectionProvider>
    </html>
  );
}