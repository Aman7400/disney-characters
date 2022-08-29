/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import allCharacters from '../../data/characters'

const Character = () => {
    const { query } = useRouter()
    const character = allCharacters[query.character]
    return (
        <div className="pt-[8rem] pl-[8rem]">
            <button className="block ml-auto">
                <Link href={'/'}>X Close</Link>
            </button>
            <section className={`${character.bgColorScheme} relative p-8 pl-[30rem] rounded-tl-[40px]  h-full`}>
                <section>
                    <h1 className={`text-[72px] ${character.textColorScheme} font-bold `}>
                        {character.name}
                    </h1>
                    <p className={`font-semibold italic font-mono ${character.textColorScheme}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada eros sit amet tortor convallis, at viverra lorem tincidunt. Praesent maximus faucibus convallis. Morbi ornare scelerisque diam nec suscipit. Aenean lacinia, magna vitae scelerisque tempor, magna metus molestie sapien, non molestie velit eros et orci. Praesent at tellus metus. Morbi convallis in turpis eget mattis. Nam iaculis eget arcu non ultrices. Nulla ligula elit, maximus eu sem in, tincidunt lobortis eros. Aliquam eu scelerisque mi, a blandit neque. Morbi eu dolor ante.
                    </p>
                </section>
                <CharacterClips />
                <img alt={character.name} className={' absolute -top-[160px] left-[80px] w-[360px] shrink-0 h-[640px]'} src={character.img} />
            </section>
        </div>
    )
}

function CharacterClips(){
    return (
       <div>
        <h1>Clips</h1>
         <section className='flex flex-row overflow-x-scroll no-scrollbar'>
           {
            allCharacters.map((character,i) => 

            <section className='w-[240px] cursor-pointer hover:shadow-lg hover:bg-pink-300 duration-[400ms] ease-in-out mr-4 rounded-lg h-[120px] shrink-0 bg-slate-400 p-2' key={i}>
                {character.name}
            </section>
            
            )
           }
        </section>
       </div>
    )
}

export default Character