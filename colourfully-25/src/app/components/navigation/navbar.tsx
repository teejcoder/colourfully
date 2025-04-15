import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/logo.png';
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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 bg-black bg-transparent backdrop-blur-sm text-white">
      <>
        <Link href="/">
          <p className="text-lg font-bold mr-2">Colourfully</p>
        </Link>
        <Image src={Logo} alt="Colourfully Logo" className='mr-auto' width={25} height={25} />
      </>
      <ul className="gap-2 flex items-center justify-center">
        {navLinks.map((e, i) => (
          <li key={i}>
            <Link href={e.link} className="hover:underline">
              {e.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}