import { UserAvatar } from "./Avatar";
import { Link } from "react-router-dom";

import { ThemMode } from "./ThemeToggle";
import { buttonVariants } from "./ui/button";
import { Grip, Settings } from "lucide-react";

function NavBar() {
  return (
    <div className=" h-16   w-full  border-b bg-slate-100 dark:bg-slate-950">
      <div className="mx-16 my-1 flex items-center h-full w-['75%']">
        <div className="flex items-center justify-between w-full h-full">
          <div className="flex items-center justify-start w-full h-full">
            <img className="w-auto h-14" src="/RFID-72-Res-Logo-190x83.png"/>
          </div>



          <div className="flex gap-3">
            <Link to={"/"} className={` ${buttonVariants({ variant: "link" })}`}> <h1>Dashboard</h1></Link>
            <Link to={"/settings/assests"} className={` ${buttonVariants({ variant: "secondary" , size:'icon'})}`}> <Grip size={20} />{" "}</Link>
            <Link to={"/settings/companyinfo"} className={` ${buttonVariants({ variant: "secondary" , size:'icon'})}`}> <Settings size={20} />{" "}</Link>
            <ThemMode />
            <UserAvatar/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
