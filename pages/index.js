/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import allCharacters from "../data/characters"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Disney Characters</title>
        <meta name="description" content="Web UI for cartoon characters of Disney." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CharactersListView />
    </div>
  )
}


function CharactersListView() {
  return (
    <div className="p-5 mt-5 flex flex-row w-screen overflow-x-auto no-scrollbar ">
      {
        allCharacters.map(({ movie, shadowColor, name, img, bgColorScheme, textColorScheme }, i) =>

          <Link key={i} href={`/character/${i}`}>
            <section className={`w-[280px] p-8 shrink-0  mx-6 rounded-lg shadow-lg  cursor-pointer ${shadowColor}  ${bgColorScheme}`}>
              <img alt={name} className={'w-full shrink-0 h-[360px]'} src={img} />
              <section className="">
                <p className="  font-semibold text-gray-700">Movie</p>
                <p className="font-bold text-white ml-2">{movie}</p>
              </section>
              <h1 className={`text-4xl font-bold ${textColorScheme}`}>{name}</h1>
            </section>
          </Link>
        )}
    </div>
  )
}
