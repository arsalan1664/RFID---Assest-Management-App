import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { AlignJustify, Boxes, Factory, Map, MapPin } from "lucide-react";


const SidebarNav = [
    {
      id: 1,
      title: "Comapany information",
      icon: <Factory size={20} />,
      link: "/setting/companyinfo",
    },
    {
      id: 2,
      title: "Site Information",
      icon: <Map size={20} />,
      link: "/setting/siteinfo",
    },
    {
      id: 3,
      title: "Location",
      icon: <MapPin size={20} />,
      link: "/setting/location",
    },
    {
        id: 4,
        title: "Catagories",
        icon: <AlignJustify size={20} />,
        link: "/setting/category",
      },
      {
        id: 5,
        title: "Assests Fields",
        icon: <Boxes size={20} />,
        link: "/setting/assestsfield",
      },
  ];
  



export function Sidebar() {
    return (
        <div className="hidden lg:block">
            <div className={cn("pb-12  ",)}>
                <div className="space-y-4 py-4 h-[80vh]">
                    {/* Settings */}
                    <div className="px-3 py-2 ">
                        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                            Settings
                        </h2>
                        <div className="space-y-1">
                            <Button variant="ghost"  className="w-full justify-start ">
                                <Factory size={20} className="mr-2 h-4 w-4"/>
                                <Link to={'/settings/companyinfo'}>Company Information</Link>
                            </Button>
                            <Button variant="ghost" className="w-full justify-start">
                                <Map size={20}  className="mr-2 h-4 w-4"/>
                                <Link to={'/settings/siteinfo'}>Site information</Link>
                            </Button>
                            <Button variant="ghost" className="w-full justify-start">
                            <MapPin size={20} className="mr-2 h-4 w-4"/>
                                <Link to={'/settings/location'}>Locationn</Link>
                            </Button>
                            <Button variant="ghost" className="w-full justify-start">
                            <AlignJustify size={20} className="mr-2 h-4 w-4"/>

                                <Link to={'/settings/categories'}>Categories</Link>
                            </Button>
                            <Button variant="ghost" className="w-full justify-start">
                            <Boxes size={20} className="mr-2 h-4 w-4"/>
                                <Link to={'/settings/assestsfields'}>Assests Fields</Link>
                            </Button>


                        </div>
                    </div>

                    {/* others */}
         {/* <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Playlists
          </h2>
            <div className="space-y-1 p-2">
              {SidebarNav?.map((SidebarNav, i) => (
                <Button
                  key={`${SidebarNav}-${i}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M21 15V6" />
                    <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M12 12H3" />
                    <path d="M16 6H3" />
                    <path d="M12 18H3" />
                  </svg>
                  {SidebarNav}
                </Button>
              ))}
            </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}