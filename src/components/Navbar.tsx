import { useState } from "react"
import { Menu } from "../icons/Menu"
import { Plus } from "../icons/Plus"
import { Search } from "../icons/Search"
import { Moon } from "../icons/Moon"
import { Sun } from "../icons/Sun"

export const Navbar = () => {

    const [dark, setDark] = useState(true);

    return(
        <div className=" h-18 w-full  mt-4 flex items-center justify-between ">
            <div className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg">
                <Menu size="5" onclick={()=>{}}/>
                <Search />
                <Plus />
            </div>
            <div className="flex items-center gap-2 bg-gray-800 text-white px-3 py-2 rounded-lg">
                <div onClick={()=>{setDark(!dark)}}>
                    {dark ? <Moon /> : <Sun />}
                </div>
            </div>
        </div>
    )
}