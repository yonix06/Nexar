import './global.css';
import '@mantine/core/styles.css';
//import '@mantine/form/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/spotlight/styles.css';
//import '@mantine/modals/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantinex/mantine-logo/styles.css';
import './theme';
import { ShikiProvider } from '@mantinex/shiki';
import { ColorSchemeScript, MantineProvider, DirectionProvider, localStorageColorSchemeManager } from '@mantine/core';
import { HotKeysHandler } from '../components/HotKeysHandler';
import { Search } from '../components/Search';
import { GaScript } from '../components/GaScript';

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
};

async function loadShiki() {
  const { getHighlighter } = await import('shikiji');
  const shiki = await getHighlighter({
    langs: ['tsx', 'scss', 'html', 'bash', 'json'],
  });

  return shiki;
}

export default function RootLayout({
  children,
  Component,
}: {
  children: React.ReactNode;
  Component: any;
}) {
  return (
    <html lang="fr">
      <head>
          <ColorSchemeScript defaultColorScheme="auto" localStorageKey="mantine-ui-color-scheme"  />
      </head>
      <GaScript />
      <body>
       <DirectionProvider initialDirection="ltr" detectDirection={false}>
         <MantineProvider
          defaultColorScheme="auto"
          colorSchemeManager={localStorageColorSchemeManager({ key: 'mantine-ui-color-scheme' })}
         >
          <ShikiProvider loadShiki={loadShiki}>
            <HotKeysHandler />
              <Component {...children} />
          </ShikiProvider>
         </MantineProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}


