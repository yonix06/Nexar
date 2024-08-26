import "../styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Theme, ThemePanel } from '@radix-ui/themes';
import { TRPCReactProvider } from "../../src/trpc/react";
import '@radix-ui/themes/styles.css';

export const metadata: Metadata = {
  title: "Portail d'application",
  description: "Portail de connexion globale à la Mairie de Saint-Jean Cap-Ferrat",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${GeistSans.variable}`}>
      <body>
      <Theme
        accentColor="blue"
        appearance="dark"
        grayColor="gray"
        panelBackground="transluscent"
        scaling="100%"
        radius="full"
      >
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <ThemePanel />
      </Theme>
      </body>
    </html>
  );
}
