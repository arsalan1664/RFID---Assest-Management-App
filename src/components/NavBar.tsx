
import { UserAvatar } from "./Avatar"
import {
    Link
} from "react-router-dom";

import { ThemMode } from "./ThemeToggle"
import { Button } from "./ui/button"
import { Settings } from "lucide-react";


function NavBar() {
    return (
        <div className=" h-16   w-full  border-b">
            <div className="mx-16 my-1 flex items-center h-full w-['75%']">
                <div className="flex items-center justify-between w-full h-full">
<div className="flex items-center justify-start w-full h-full">
                   <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-4 mt-1 h-10 w-10"
                    >
                        <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                        <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                        <circle cx="12" cy="12" r="2" />
                        <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                        <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
                    </svg>
                    <h1 className="text-3xl  tracking-wide">RFID PAKISTAN</h1>
</div>

                    <div className="flex gap-2">

                    </div>

                    <div className="flex gap-3">
                    <Button variant={'outline'} className="hover:no-underline ">  
                            <Link to={'/'}>Dashboard</Link>
                        </Button>

                        <Button variant={'outline'} size={"icon"} className="hover:no-underline ">  
                            <Link to={'/settings/companyinfo'}><Settings size={'20px'} /></Link>
                        </Button>
                        <ThemMode />
                        <UserAvatar />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBar