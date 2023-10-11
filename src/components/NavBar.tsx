
import { UserAvatar } from "./Avatar"
import { Assest } from "./Assest"
import { Search } from "./Search"


import { ThemMode } from "./ThemeToggle"
import { Button } from "./ui/button"


function NavBar() {
    return (
        <div className=" h-16   w-full  border-b">
            <div className="mx-6 my-4 flex items-center   h-auto w-['85%']">
                <div className="flex items-center justify-between w-full h-full">

                    <h1 className="text-3xl font-['Poppin'] tracking-widest">RFID Pakistan</h1>

                    <div className="flex gap-2">
                        <Button variant={"link"}>Dashboard</Button>
                        <Assest />
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