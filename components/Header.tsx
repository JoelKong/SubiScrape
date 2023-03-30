import Image from "next/image"
import Link from "next/link"
import Github from "./Github"
import Kofi from "./Kofi"

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 border-slate-500 pb-3 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <Image
          alt="header text"
          src="/favicon.ico"
          className="sm:w-10 sm:h-10 w-9 h-9 -mr-1 "
          width={26}
          height={26}
        />
        <h1 className="sm:text-base text-base font-bold ml-2 tracking-tight mt-2 dark:md:hover:text-slate-600 ">
          subiScrape.com
        </h1>
      </Link>

      <h1 className="sm:text-base text-base font-bold ml-2 tracking-tight mt-1.5 flex">
        <span className="mr-5"></span>
        <Kofi />
      </h1>
    </header>
  )
}
