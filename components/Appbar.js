import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai"

export default function Appbar() {
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