import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { AlignJustify, Codesandbox, Factory, Map, MapPin, Users2 } from "lucide-react";


// const SidebarNav = [
//   {
//     id: 1,
//     title: "Comapany information",
//     icon: <Factory size={20} />,
//     link: "/setting/companyinfo",
//   },
//   {
//     id: 2,
//     title: "Site Information",
//     icon: <Map size={20} />,
//     link: "/setting/siteinfo",
//   },
//   {
//     id: 3,
//     title: "Location",
//     icon: <MapPin size={20} />,
//     link: "/setting/location",
//   },
//   {
//     id: 4,
//     title: "Catagories",
//     icon: <AlignJustify size={20} />,
//     link: "/setting/category",
//   },
//   {
//     id: 5,
//     title: "Assests Fields",
//     icon: <Boxes size={20} />,
//     link: "/setting/assestsfield",
//   },
// ];

export function Sidebar() {
  return (
    <div className="hidden lg:block">
      <div className={cn("pb-12  ")}>
        <div className="space-y-4 py-4 h-[80vh]">
          {/* Assests and Employee*/}
          <div className="py-2">
            <h2 className="relative px-7 text-lg font-semibold tracking-tight">
              Assests & Employee
            </h2>
            <div className="space-y-1 p-2">
              <Button variant="ghost" className="w-full justify-start">
                <Codesandbox  size={20} className="mr-2 h-4 w-4" />
                <Link to={"/settings/assests"}>Assests</Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Users2 size={20} className="mr-2 h-4 w-4" />
                <Link to={"/settings/employee"}>Employee</Link>
              </Button>
            </div>
          </div>
            {/* <DropdownMenuSeparator/> */}
            
          {/* Settings */}
          <div className="px-3 py-2 ">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Settings
            </h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start ">
                <Factory size={20} className="mr-2 h-4 w-4" />
                <Link to={"/settings/companyinfo"}>Company Information</Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Map size={20} className="mr-2 h-4 w-4" />
                <Link to={"/settings/siteinfo"}>Site information</Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <MapPin size={20} className="mr-2 h-4 w-4" />
                <Link to={"/settings/location"}>Locationn</Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <AlignJustify size={20} className="mr-2 h-4 w-4" />

                <Link to={"/settings/categories"}>Categories</Link>
              </Button>
              {/* <Button variant="ghost" className="w-full justify-start">
                <Boxes size={20} className="mr-2 h-4 w-4" />
                <Link to={"/settings/assestsfields"}>Assests Fields</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
