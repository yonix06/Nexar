import { Metadata } from "next"
import Image from "next/image"
import { Button } from "@mantine/core"
import MarkdownRenderer from '../../components/MarkdownRenderer'
import { Cadre } from "components/Cadre/Cadre"
import { NavLink } from "@mantine/core"
import ButtonGridContainer from '../../components/ButtonGrid/ButtonGrid';

export const metadata: Metadata = {
  title: "Panel d'administration",
  description: "Page d'administration de l'application",
}

//TODO: automatiser la constante 'pathnames' et la transformer en fonction pour fetch le contenu du fichier middleware
const PathnameLinks = () => {
  const pathnames = [
    { pathname: '/about', label: 'À propos' },
    { pathname: '/admin', label: 'Administration' },
    { pathname: '/contact', label: 'Contact' },
    { pathname: '/404', label: 'Erreur 404' },
    { pathname: '/500', label: 'Erreur 500' },
    { pathname: '/_error', label: 'Erreur' },
    { pathname: '/api/healthz', label: 'Santé de l\'API' },
    { pathname: '/archivage', label: 'Archivage' },
    { pathname: '/consultation', label: 'Consultation' },
    { pathname: '/diffusion', label: 'Diffusion' },
    { pathname: '/edition_documents', label: 'Édition de documents' },
  ];

  return (
    <div className="flex flex-col grid-cols-3 mx-auto text-black">
      {pathnames.map((pathname) => (
        <Button key={pathname.pathname}  className="m-2" href={pathname.pathname}>
          {pathname.label}
        </Button>
      ))}
    </div>
  )
}

export default function AdminPanel() {
  return (<>
      <div className="grid items-center max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16">
        <div className="flex flex-col mx-auto place-self-center">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight place-self-center dark:text-white md:text-5xl xl:text-6xl">
            🔑PANEL ADMIN💻
          </h1>
          <br />
            <div className="flex grid flex-auto grid-cols-2 mx-auto ">
              <iframe className="mx-auto" src="https://open.spotify.com/embed/track/6ACGFCYTDYE9qNAEy2T9zN" width="300" height="200" allow="encrypted-media; fullscreen; picture-in-picture"></iframe>
              <PathnameLinks />
            </div>
          <br />
          <Cadre className="flex flex-col max-w-2xl mb-6 text-black font-large dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            - Faire les TODO dans le code avec //TODO <br />
            - Refaire le ReadMe <br />
            - <span style={{textDecoration: "line-through"}}>Uploader les logo pour le projet</span> <br />
            - Mettre des raccourcis pour les interface de gestion dans un panel admin <br />
            - <span style={{textDecoration: "line-through"}}>FAUT DEJA POUVOIR FAIRE LE DIT PANEL ADMIN</span> <br />
            - Prisma / Prettier / Tailwindcss / Storybook ... <br />
            - <span style={{textDecoration: "line-through"}}>Verifier les routes et les fichiers correspondants</span> <br />
            - Travailler sur les composants react et les composants Next <br />
            - Structurer et build la base de données  <br />
            - Ajouter des tests unitaires <br />
            - Definir toutes les fonctions backend et frontend <br />
            - https://storybook.nextui.org/?path=/story/foundations-colors--common-colors <br />
            - https://mantine.dev/guides/storybook/ <br />
            - <NavLink>https://stackdiary.com/react-component-libraries/</NavLink> <br />
            - Travailler sur le design à partir du fichier layout <br />
          </Cadre>
          <Button  href="https://github.com/yonix06/next-gestion-arretes" className="mr-3 text-white bg-gray-800 hover:bg-gray-700">
            Github Yoyo
          </Button>
          <Button href="/" className="mr-3 bg-red-400">
            Accueil
          </Button>
          <Button
            href="/about"
            intent="secondary"
            className="mr-3 text-white bg-gray-800 hover:bg-gray-700"
          >
            Ouat About ?!
          </Button>
          <br />
        </div>
        <Image src="/graph.svg" width="200" height="100" alt="graph" className="mx-auto place-self-center"/>
      </div>
  </>
  )
}
