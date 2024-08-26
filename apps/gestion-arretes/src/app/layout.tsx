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
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
       <head>
          <ColorSchemeScript />
        </head>
      <body>
        <MantineProvider>
        {children}
        </MantineProvider>
      </body>
    </html>
  );
}


