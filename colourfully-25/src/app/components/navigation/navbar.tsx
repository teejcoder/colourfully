import Link from 'next/link';

const navLinks = [
  {
    title: "About",
    link: "/",
  },
  {
    title: "GitHub",
    link: "#",
  },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 bg-black bg-transparent backdrop-blur-lg text-white">
      <Link href="/">
        <p className="text-lg font-bold">Colourfully</p>
      </Link>
      <Link href="/" className='mr-auto'>
          <img src="/logo.png" alt="Colourfully Logo" className="h-8 w-8" />
      </Link>
      <ul className='flex gap-2'>
        {
          navLinks.map((e, i) => (
            <li key={i}>
              <Link href={e.link} className='hover:underline'>
                {e.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}