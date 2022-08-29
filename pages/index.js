/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Disney Characters</title>
        <meta name="description" content="Web UI for cartoon characters of Disney." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-5 h-screen">
        <Appbar />
        <CharactersListView />
      </div>

    </div>
  )
}

function Appbar() {
  return (
    <nav className="px-16 py-4 flex flex-row justify-between items-center">

      <div className="flex items-center">
        <img className="cursor-pointer" alt="Disney logo" src="/disney-logo.png" width={120} height={120} />
        <h2 className="ml-8 font-mono text-2xl font-semibold cursor-pointer">
          Characters
        </h2>
      </div>

      <div className="flex  items-center p-2 w-[240px] hover:w-1/2 duration-150 ease-in-out rounded-lg bg-slate-100">
        <AiOutlineSearch />
        <input type="text" className="text-md font-mono outline-none ml-2 bg-transparent" placeholder="Search Characters" />
      </div>

      <div className="flex items-center">
        <p className="text-lg font-mono">Menu</p>
        <CgMenuGridR className="m-2 cursor-pointer" size={24} />
      </div>

    </nav>
  )
}

const allCharacters = [
  {shadowColor:'shadow-red-400/50', movie: "Tinkerbell", name: "Rosetta", img: "/pinnocio-lg.png", bgColorScheme: "bg-red-400", textColorScheme: "text-red-700" },
  {shadowColor:'shadow-blue-400/50', movie: "Inside Out", name: "Sadness", img: "/pinnocio-lg.png", bgColorScheme: "bg-blue-400", textColorScheme: "text-blue-700" },
  {shadowColor:'shadow-green-400/50', movie: "Inside Out", name: "Disgust", img: "/pinnocio-lg.png", bgColorScheme: "bg-green-400", textColorScheme: "text-green-700" },
  {shadowColor:'shadow-purple-400/50', movie: "Zootopia", name: "Judy", img: "/pinnocio-lg.png", bgColorScheme: "bg-purple-400", textColorScheme: "text-purple-700" },
  {shadowColor:'shadow-pink-400/50', movie: "Moana", name: "Moana", img: "/pinnocio-lg.png", bgColorScheme: "bg-pink-400", textColorScheme: "text-pink-700" },
  {shadowColor:'shadow-orange-400/50', movie: "Wreck it Raplh", name: "Vanellope", img: "/pinnocio-lg.png", bgColorScheme: "bg-orange-400", textColorScheme: "text-orange-700" },
]

function CharactersListView() {
  return (
    <div className="p-5 mt-5 flex flex-row w-screen overflow-x-auto no-scrollbar ">
      {
        allCharacters.map(({ movie,shadowColor, name, img, bgColorScheme, textColorScheme }, i) =>

          <section key={i} className={`w-[280px] p-8 shrink-0  mx-6 rounded-lg shadow-lg  cursor-pointer ${shadowColor}  ${bgColorScheme}`}>
            <img alt={name} className={'w-full shrink-0 h-[360px]'} src={img} />
            <section className="">
              <p className="  font-semibold text-gray-700">Movie</p>
              <p className="font-bold text-white ml-2">{movie}</p>
            </section>

            <h1 className={`text-4xl font-bold ${textColorScheme}`}>{name}</h1>

          </section>
        )}
    </div>
  )
}
