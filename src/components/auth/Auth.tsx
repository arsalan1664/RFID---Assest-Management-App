import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, Outlet } from "react-router-dom";
// import {UserLogin} from '../components/UserLogin'

function Auth() {
  return (
    <div className="container relative  h-[100vh] flex flex-col items-center justify-center pt-0">
      <Link
        to="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Skip
      </Link>
      <div
        className="absolute left-4 top-4 md:left-8 md:top-8"
      >
        <h1 className="text-2xl">RFID PAKISTAN</h1>
      </div>

      <div className="p-14">
        {/* <UserLogin/> */}
        <Outlet />
      </div>
    </div>
  );
}

export default Auth;

// md:grid lg:max-w-none lg:grid-cols-2 lg:px-0
