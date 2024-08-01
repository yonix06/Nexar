import { Metadata } from "next"
import { Button } from "components/Button/Button"

// const DatabaseManager = require('../../data/databaseManager');

// Créer une instance du gestionnaire de base de données
// const dbManager = new DatabaseManager();

// Utiliser le gestionnaire de base de données pour effectuer des opérations
// dbManager.createUser('LDAPuser', 'pubkey') // TODO: add pubkey + a travailler
//  .then(() => {
//    console.log('Utilisateur créé avec succès !');
//  })
//  .catch((error: { message: any; }) => {
//    console.error(error.message);
//  });



export default function Web() {
  return (<>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
%FILENAME%            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Jumpstart your enterprise project with our feature-packed, high-performance Next.js boilerplate!
              Experience rapid UI development, AI-powered code reviews, and an extensive suite of tools for a smooth and
              enjoyable development process.
            </p>
            <Button href="https://github.com/Blazity/next-enterprise" className="mr-3">
              Get started
            </Button>
            <Button
              href="https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise"
              intent="secondary"
            >
              Deploy Now
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            Coucou
          </div>
        </div>
      </section>
    </>
  )
}
