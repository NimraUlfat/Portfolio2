
import Link from "next/link";

export default function Header(){
    return(
      <section>
  <div className="bg-pink-700 text-white text-xs py-3 px-4 text-center flex justify-center space-x-4">
    <a href="#" className="text-white hover:text-gray-300">
      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
      </svg>
    </a>
    <a href="#" className="text-white hover:text-gray-300">
      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
      </svg>
    </a>
    <a href="#" className="text-white hover:text-gray-300">
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
      </svg>
    </a>
    <a href="#" className="text-white hover:text-gray-300">
      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
        <circle cx="4" cy="4" r="2" stroke="none"></circle>
      </svg>
    </a>
  </div>

  <header className="bg-black text-white body-font shadow-lg">

  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <div className="flex items-center mb-4 md:mb-0 space-x-4">
      
      <span className="text-3xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-800">Nimra Ulfat</span>
    </div>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-8">
      <Link href={"/"}>
        <li className="list-none mr-5 text-lg font-semibold relative group">
          <span className="transition-all duration-300 group-hover:text-pink-400">Home</span>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
        </li>
      </Link>
      <Link href={"/about"}>
        <li className="list-none mr-5 text-lg font-semibold relative group">
          <span className="transition-all duration-300 group-hover:text-pink-400">About</span>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
        </li>
      </Link>
      <Link href={"/contact"}>
        <li className="list-none mr-5 text-lg font-semibold relative group">
          <span className="transition-all duration-300 group-hover:text-pink-400">Contact</span>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
        </li>
      </Link>
    </nav>
  </div>
</header>

</section>

    )
}