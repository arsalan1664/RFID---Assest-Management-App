
import { UserAvatar } from "./Avatar"
import { Assest } from "./Assest"
import { Search } from "./Search"
import {
    Link
} from "react-router-dom";

import { ThemMode } from "./ThemeToggle"
import { Button } from "./ui/button"


function NavBar() {
    return (
        <div className=" h-16   w-full  border-b">
            <div className="mx-16 my-1 flex items-center h-full w-['75%']">
                <div className="flex items-center justify-between w-full h-full">

                    <h1 className="text-3xl font-mono tracking-wide">RFID PAKISTAN</h1>

                    <div className="flex gap-2">
                        <Button variant={'outline'} className="hover:no-underline ">  
                            <Link to={'/'}>Dashboard</Link>
                        </Button>

                        <Button variant={'outline'} className="hover:no-underline ">  
                            <Link to={'/settings'}>Assests</Link>
                        </Button>
                        <Assest />
                    </div>

                    <div className="flex gap-3">
                        <ThemMode />
                        <Search />
                        <UserAvatar />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBar