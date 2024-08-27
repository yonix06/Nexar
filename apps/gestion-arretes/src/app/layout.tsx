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
import { ColorSchemeScript, MantineProvider, DirectionProvider } from '@mantine/core';
//import { HotKeysHandler } from '../components/HotKeysHandler';
import { Search } from '../components/Search';
import { GaScript } from '../components/GaScript';

export const metadata = {
  title: 'Gestion d\'arrêtés',
  description: 'Bouh',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode | string | number | boolean;
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
         >
            {children}
            <Search data={Array.isArray(children) ? children : []} />
         </MantineProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}


