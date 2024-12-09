import Link from "next/link";

export default function Footer(){
    return(
        <div>
            <footer className="bg-black text-gray-400 py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      
     
      <div className="mb-4 md:mb-0">
        <h1 className="text-pink-700 font-bold text-xl">Nimra Ulfat</h1>
      </div>
      
      
      <ul className="flex space-x-6 text-sm">
  <Link href={"/"}>
    <li className="list-none hover:text-pink-500">Home</li>
  </Link>
  <Link href={"/about"}>
    <li className="list-none hover:text-pink-500">About</li>
  </Link>
  <Link href={"/contact"}>
    <li className="list-none hover:text-pink-500">Contact</li>
  </Link>
</ul>
      
      
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="#" className="text-gray-400 hover:text-pink-500">
          <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-pink-500">
          <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-pink-500">
          <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-pink-500">
          <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>
    </div>

   
    <div className="mt-8 text-center text-sm text-gray-500">
      © 2024 Nimra Ulfat. All rights reserved.
    </div>
  </div>
</footer>

        </div>
    )
}