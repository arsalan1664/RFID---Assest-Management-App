import { cn } from "@/lib/utils";
import {  NavLink } from "react-router-dom";

import {
  Codesandbox,
  Users2,
} from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { buttonVariants } from "@/components/ui/button"


const StocksProducts = [
  {
    id: "1",
    title: "Productx",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/",
  },
  {
    id: "2",
    title: "Categories",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/",
  },
  {
    id: "3",
    title: "Stocks/Inventory",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/",
  },
];
const Sales = [
  {
    id: "1",
    title: "Sale Orders",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/",
  },
  {
    id: "2",
    title: "Customers",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/",
  },
];
const Purchase = [
  {
    id: "1",
    title: "Purchases",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/",
  },
  {
    id: "2",
    title: "Suppliers",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/suppliers",
  },
];

const Encoder = [
  {
    id: "1",
    title: "Encoder",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/",
  },
  {
    id: "2",
    title: "Encoder Printer",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/",
  },
];

const Warehouses = [
  {
    id: "1",
    title: "Continents",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/continents",
  },
  {
    id: "2",
    title: "Countires",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/countries",
  },

  {
    id: "3",
    title: "State",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/states",
  },
  {
    id: "4",
    title: "Cities",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/cities",
  },
  {
    id: "5",
    title: "Location",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/location",
  },
  {
    id: "6",
    title: "Building",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/buildings",
  },
  {
    id: "7",
    title: "Floor",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/floors",
  },
  {
    id: "8",
    title: "Rooms",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/rooms",
  },
];

const setting = [
  {
    id: "1",
    title: "Language",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/language",
  },
  {
    id: "2",
    title: "TimeZone",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/timezone",
  },
  {
    id: "3",
    title: "Companies",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/companies",
  },
  {
    id: "4",
    title: "Department",
    icon: <Codesandbox size={20} className="mr-2 h-4 w-4" />,
    link: "/settings/department",
  },]

export function Sidebar() {
  return (
    <ScrollArea className="w-auto h-[90vh] bg-slate-100 dark:bg-slate-950">
      <div className="hidden lg:block ">
        <div className={cn("pb-12  ")}>
          <div className="space-y-4 py-4 h-[90vh]">
            {/* Assests and Employee*/}
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h2 className="relative px-7 text-md font-semibold tracking-tight">
                    Assests
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="bg-slate-200 dark:bg-slate-900">
                  <div className="py-2">
                    <div className="space-y-1 p-2">
                      <NavLink to={"/settings/assests"} className={`nav-link ${buttonVariants({ variant: "ghost" })}`}><Codesandbox size={20} className="mr-2 h-4 w-4" /> <h1>Assests</h1></NavLink>
                      <NavLink to={"/settings/employee"} className={`nav-link ${buttonVariants({ variant: "ghost" })}`}><Users2 size={20} className="mr-2 h-4 w-4" /> <h1>Employee</h1></NavLink>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              {/* Stocks Products*/}
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <h2 className="relative px-7 text-md font-semibold tracking-tight">
                    Stock & Products
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="bg-slate-200 dark:bg-slate-900">
                  <div className="py-2">
                    <div className="space-y-1 p-2">
                      {StocksProducts.map((i) => (
                        <NavLink key={i.id} to={i.link} className={`nav-link ${buttonVariants({ variant: "ghost" })}`}>{i.icon} <h1>{i.title}</h1></NavLink>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              {/* Sales*/}
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <h2 className="relative px-7 text-md font-semibold tracking-tight">
                    Sales
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="bg-slate-200 dark:bg-slate-900">
                  <div className="py-2">
                    <div className="space-y-1 p-2">
                      {Sales.map((i) => (
                        <NavLink key={i.id} to={i.link} className={`nav-link ${buttonVariants({ variant: "ghost" })}`}>{i.icon} <h1>{i.title}</h1></NavLink>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              {/* Purchase*/}
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <h2 className="relative px-7 text-md font-semibold tracking-tight">
                    Purchase
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="bg-slate-200 dark:bg-slate-900">
                  <div className="py-2">
                    <div className="space-y-1 p-2">
                      {Purchase.map((i) => (
                        <NavLink key={i.id} to={i.link} className={`nav-link ${buttonVariants({ variant: "ghost" })}`}>{i.icon} <h1>{i.title}</h1></NavLink>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              {/* Encoder*/}
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  <h2 className="relative px-7 text-md font-semibold tracking-tight">
                    Encoder
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="bg-slate-200 dark:bg-slate-900">
                  <div className="py-2">
                    <div className="space-y-1 p-2">
                      {Encoder.map((i) => (
                        <NavLink key={i.id} to={i.link} className={`nav-link ${buttonVariants({ variant: "ghost" })}`}>{i.icon} <h1>{i.title}</h1></NavLink>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              {/* Warehouses*/}
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  <h2 className="relative px-7 text-md font-semibold tracking-tight">
                    Location
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="bg-slate-200 dark:bg-slate-900">
                  <div className="py-2">
                    <div className="space-y-1 p-2">
                      {Warehouses.map((i) => (
                        <NavLink key={i.id} to={i.link} className={`nav-link ${buttonVariants({ variant: "ghost" })}`}>{i.icon} <h1>{i.title}</h1></NavLink>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              {/* Setting*/}
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  <h2 className="relative px-7 text-md font-semibold tracking-tight">
                    Setting
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="bg-slate-200 dark:bg-slate-900">
                  <div className="py-2">
                    <div className="space-y-1 p-2">
                      {setting.map((i) => (
                        <NavLink key={i.id} to={i.link} className={`nav-link ${buttonVariants({ variant: "ghost" })}`}>{i.icon} <h1>{i.title}</h1></NavLink>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              {/* Setting */}
              {/* <AccordionItem value="item-8">
                <AccordionTrigger>
                  <h2 className="relative px-7 text-md font-semibold tracking-tight">
                    Settings
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="bg-slate-200 dark:bg-slate-900">
                  <div className="py-2">
                    <div className="space-y-1 p-2">
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
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem> */}
            </Accordion>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}





