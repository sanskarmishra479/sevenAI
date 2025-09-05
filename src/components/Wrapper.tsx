import { useState } from "react";
import { InputBox } from "./InputBox"
import { Menu } from "../icons/Menu";
import { Search } from "../icons/Search";
import { Plus } from "../icons/Plus";
import { Moon } from "../icons/Moon";
import { Sun } from "../icons/Sun";


export const Wrapper = () => {
    const [dark, setDark] = useState(true);
    const [openMenu, setOpenmenu] = useState(false);

    return(
       <>
        <div className={`h-screen ${openMenu ? "w-full sm:w-70" : "w-0" } bg-amber-900 sm:transition-all sm:duration-300`}>
               <div className="p-4 flex">
                <div className="bg-gray-800 text-white flex p-2 gap-2 rounded-xl">
                    <Menu size="5" onclick={()=>{setOpenmenu(!openMenu)}}/>
                    <Search />
                    <Plus />
                </div>
               </div>
        </div>
        <div className={`h-screen w-full sm:flex flex items-start justify-between p-4 bg-amber-500 ${openMenu ? "hidden" : ""}`}>
            <div className={`flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg ${openMenu ? "hidden" :"flex"}`}>
                <Menu size="5" onclick={()=>{setOpenmenu(!openMenu)}}/>
                <Search />
                <Plus />
            </div>
            
            <div className="flex items-center gap-2 bg-gray-800 text-white px-3 py-2 rounded-lg">
                <div onClick={()=>{setDark(!dark)}}>
                    {dark ? <Moon /> : <Sun />}
                </div>
            </div>
        </div>
    </>
            
    )
}