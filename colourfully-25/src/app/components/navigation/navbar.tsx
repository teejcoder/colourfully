'use client'

import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/logo.png';
import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";

const navLinks = [
  {
    title: "About",
    link: "/",
  },
  {
    title: "GitHub",
    link: "#",
  },
];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 bg-black bg-transparent backdrop-blur-lg text-white">
      <>
        <Link href="/">
          <p className="text-lg font-bold mr-2">Colourfully</p>
        </Link>
        <Image src={Logo} alt="Colourfully Logo" className='hidden sm:flex mr-auto' width={25} height={25} />
      </>
      <ul className="hidden sm:flex gap-2">
        {navLinks.map((e, i) => (
          <li key={i}>
            <Link href={e.link} className="hover:underline">
              {e.title}
            </Link>
          </li>
        ))}
      </ul>

      <button onClick={toggleSidebar} className="sm:hidden">
        <CiMenuBurger height={25} width={25} />
      </button>

      {isSidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-90 flex flex-col items-center justify-center text-white">
          <button onClick={toggleSidebar} className="absolute top-4 right-4">
            <CiMenuBurger height={25} width={25} />
          </button>
          <ul className="flex flex-col gap-4 text-center">
            {navLinks.map((e, i) => (
              <li key={i}>
                <Link href={e.link} className="text-lg hover:underline" onClick={toggleSidebar}>
                  {e.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}