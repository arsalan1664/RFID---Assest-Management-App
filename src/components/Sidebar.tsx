import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

import {
  AlignJustify,
  Codesandbox,
  Factory,
  Map,
  MapPin,
  Users2,
} from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

const StocksProducts = [
  {
    id: "1",
    title: "Productx",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/assests",
  },
  {
    id: "2",
    title: "Categories",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/assests",
  },
  {
    id: "3",
    title: "Stocks/Inventory",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/assests",
  },
];
const Sales = [
  {
    id: "1",
    title: "Sale Orders",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/assests",
  },
  {
    id: "2",
    title: "Customers",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/assests",
  },
];
const Purchase = [
  {
    id: "1",
    title: "Purchases",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/assests",
  },
  {
    id: "2",
    title: "Suppliers",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/assests",
  },
];

const Encoder = [
  {
    id: "1",
    title: "Encoder",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/assests",
  },
  {
    id: "2",
    title: "Encoder Printer",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/assests",
  },
];

const Warehouses = [
  {
    id: "1",
    title: "Continents",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/assests",
  },
  {
    id: "2",
    title: "Countires",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/assests",
  },

  {
    id: "3",
    title: "State",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/assests",
  },
  {
    id: "4",
    title: "Cities",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/assests",
  },
  {
    id: "5",
    title: "Location",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/assests",
  },
  {
    id: "6",
    title: "Building",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/assests",
  },
  {
    id: "7",
    title: "Floor",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/assests",
  },
  {
    id: "8",
    title: "Warehouses",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/assests",
  },
];

export function Sidebar() {
  return (
    <ScrollArea className="w-auto h-[90vh] bg-zinc-100">
      <div className="hidden lg:block ">
        <div className={cn("pb-12  ")}>
          <div className="space-y-4 py-4 h-[90vh]">
            {/* Assests and Employee*/}
            <div className="py-2">
              <h2 className="relative px-7 text-lg font-semibold tracking-tight">
                Assests & Employee
              </h2>
              <Separator className="w-[80%] ml-5 mt-2" />
              <div className="space-y-1 p-2">
                <Button variant="ghost" className="w-[90%] justify-start">
                  <Codesandbox size={20} className="mr-2 h-4 w-4" />
                  <Link to={"/settings/assests"}>Assests</Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Users2 size={20} className="mr-2 h-4 w-4" />
                  <Link to={"/settings/employee"}>Employee</Link>
                </Button>
              </div>
            </div>
            {/* Stocks Products*/}
            <div className="py-2">
              <h2 className="relative px-7 text-lg font-semibold tracking-tight">
                Stock & Products
              </h2>
              <Separator className="w-[80%] ml-5 mt-2" />
              <div className="space-y-1 p-2">
                {StocksProducts.map((i) => (
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    key={i.id}
                  >
                    {/* <Codesandbox size={20} className="mr-2 h-4 w-4" /> */}
                    {i.icon}
                    <Link to={i.link}>{i.title}</Link>
                  </Button>
                ))}
              </div>
            </div>
            {/* Sales*/}
            <div className="py-2">
              <h2 className="relative px-7 text-lg font-semibold tracking-tight">
                Sales
              </h2>
              <Separator className="w-[80%] ml-5 mt-2" />
              <div className="space-y-1 p-2">
                {Sales.map((i) => (
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    key={i.id}
                  >
                    {/* <Codesandbox size={20} className="mr-2 h-4 w-4" /> */}
                    {i.icon}
                    <Link to={i.link}>{i.title}</Link>
                  </Button>
                ))}
              </div>
            </div>
            {/* Purchase*/}
            <div className="py-2">
              <h2 className="relative px-7 text-lg font-semibold tracking-tight">
                Purchases
              </h2>
              <Separator className="w-[80%] ml-5 mt-2" />
              <div className="space-y-1 p-2">
                {Purchase.map((i) => (
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    key={i.id}
                  >
                    {/* <Codesandbox size={20} className="mr-2 h-4 w-4" /> */}
                    {i.icon}
                    <Link to={i.link}>{i.title}</Link>
                  </Button>
                ))}
              </div>
            </div>
            {/* Encoder*/}
            <div className="py-2">
              <h2 className="relative px-7 text-lg font-semibold tracking-tight">
                Encoder
              </h2>
              <Separator className="w-[80%] ml-5 mt-2" />
              <div className="space-y-1 p-2">
                {Encoder.map((i) => (
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    key={i.id}
                  >
                    {/* <Codesandbox size={20} className="mr-2 h-4 w-4" /> */}
                    {i.icon}
                    <Link to={i.link}>{i.title}</Link>
                  </Button>
                ))}
              </div>
            </div>
            {/* Warehouses*/}
            <div className="py-2">
              <h2 className="relative px-7 text-lg font-semibold tracking-tight">
                Warehouses
              </h2>
              <Separator className="w-[80%] ml-5 mt-2" />
              <div className="space-y-1 p-2">
                {Warehouses.map((i) => (
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    key={i.id}
                  >
                    {/* <Codesandbox size={20} className="mr-2 h-4 w-4" /> */}
                    {i.icon}
                    <Link to={i.link}>{i.title}</Link>
                  </Button>
                ))}
              </div>
            </div>
            {/* Settings */}
            <div className="px-3 py-2 ">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Settings
              </h2>
              <Separator className="w-[80%] ml-5 mt-2" />
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start ">
                  <Factory size={20} className="mr-2 h-4 w-4" />
                  <Link to={"/settings/companyinfo"}>Company</Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Map size={20} className="mr-2 h-4 w-4" />
                  <Link to={"/settings/siteinfo"}>Site</Link>
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
    </ScrollArea>
  );
}
