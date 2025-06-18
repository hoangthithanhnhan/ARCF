import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-10 px-18">
      <nav className="flex items-center justify-between">
        <Link href="" className="flex-shrink-0">
          <Image src="/logo.png" alt="Logo" width={306} height={76} />
        </Link>
        <div className="hidden lg:flex justify-center flex-1">
          <div className="space-x-13.5">
            <Link href="/" className="flex-shrink-0 lg:text-sm xl:text-xl  font-semibold">About</Link>
            <Link href="/" className="flex-shrink-0 lg:text-sm xl:text-xl font-semibold">How We Give</Link>
            <Link href="/" className="flex-shrink-0 lg:text-sm xl:text-xl font-semibold">Donations & Support</Link>
            <Link href="/" className="flex-shrink-0 lg:text-sm xl:text-xl font-semibold">News</Link>
            <Link href="/" className="flex-shrink-0 lg:text-sm xl:text-xl font-semibold">Contact</Link>
          </div>
        </div>
        <div>
          <Link
            href="#"
            className="bg-primary text-body py-3.5 px-13 rounded-full font-semibold lg:text-sm xl:text-xl no-underline">
            Donate
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
