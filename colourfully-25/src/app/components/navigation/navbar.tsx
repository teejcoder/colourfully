import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/logo.png';
import { SignedIn, UserButton } from '@clerk/nextjs';

const navLinks = [
  {
    title: "About",
    link: "#about",
  },
  {
    title: "GitHub",
    link: "#",
  },
];

export default function Navbar() {

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 bg-transparent backdrop-blur-sm text-white">
      <>
        <Link href="/" className='flex items-center justify-center gap-2 mr-auto'>
          <p className="text-[1.125rem] font-bold mr-2 rainbow-highlight">Colourfully</p>
          <Image src={Logo} alt="Colourfully Logo" width={25} height={25} />
        </Link>
      </>
      <ul className="gap-3 flex items-center justify-center">
        {navLinks.map((e, i) => (
          <li key={i}>
            <Link href={e.link} className="hover:underline">
              {e.title}
            </Link>
          </li>
        ))}

      <SignedIn>
        <UserButton />
      </SignedIn>
      </ul>
    </nav>
  );
}