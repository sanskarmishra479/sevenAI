import { InputBox } from "./InputBox"
import { Navbar } from "./Navbar"

export const Wrapper = () => {
    return(
        <div className="h-screen w-[90%]">
            <Navbar />
            <InputBox />
        </div>
    )
}