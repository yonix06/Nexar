import Link from "next/link";

import { LatestPost } from "../app/_components/post";
import { getServerAuthSession } from "../server/auth";
import { api, HydrateClient } from "../trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "depuis Portal" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem] text-center">
            Portail d&apos;<span className="text-[hsl(221,80%,32%)]">Applications</span> Saint-Jean Cap-ferrat
          </h1>
          {session && <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex flex-col max-w-xs gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <Link
              className="flex flex-col max-w-xs gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>}
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl">
            {session && <div>
              {hello ? hello.greeting : "Loading tRPC query..."}
              </div>}
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-2xl text-center">
                {session && <span>Authentifié comme {session.user?.name}</span>}
              </p>
              <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="px-10 py-3 font-semibold no-underline transition rounded-full bg-white/10 hover:bg-white/20"
              >
                {session ? "Déconnexion" : "Connexion"}
              </Link>
            </div>
          </div>

          {session?.user && <LatestPost />}
        </div>
      </main>
    </HydrateClient>
  );
}
