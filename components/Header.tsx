// components/Header.tsx

import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-light-cream header-styles p-4">
      <nav className="flex justify-between items-center">
        <DropdownMenu />
        <Link href="/" className="brand-title !hover:no-underline">
          <div className="flex flex-row items-center">
            <div className="text-2xl font-quicksand font-extralight text-inherit">
              Okay Glow
            </div>
            <Image
              src="/cream-p.png"
              alt="okay glow logo"
              width={30}
              height={30}
              className="ml-2"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </Link>
        <div>
          <Link
            href="/quiz"
            className="bg-peach header-get-started text-inherit px-4 md:mr-4 mr-0 py-2 rounded-full"
          >
            <div className="duration-300 hover:custom-transform inline-block">
              Get Started
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}