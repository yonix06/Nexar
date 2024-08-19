"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "../sign-in-modal/sign-in-modal";
import UserDropdown from "../user-dropdown/user-dropdown";
import { Session } from "next-auth";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="flex items-center justify-between w-full h-16 max-w-screen-xl mx-5">
          <Link href="/" className="flex items-center text-xl font-display">
            <Image
              src="/SJCF.png"
              alt="Logo SJCF"
              width="75"
              height="40"
              className="mr-2 rounded-sm"
            ></Image>
            <p>- Gestion des Arrêtés Municipaux</p>
          </Link>
          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
