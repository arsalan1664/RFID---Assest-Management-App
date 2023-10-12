import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,

} from "@/components/ui/navigation-menu"




export function Assest() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Assests</NavigationMenuTrigger>
                    {/* Inide */}
                    <NavigationMenuContent>
                        {/* 1 */}
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Assest</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    Beautifully designed components built with Radix UI and
                                    Tailwind CSS.
                                </p>
                            </li>
                            <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Assest</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    Beautifully designed components built with Radix UI and
                                    Tailwind CSS.
                                </p>
                            </li>
                            <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Assest</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    Beautifully designed components built with Radix UI and
                                    Tailwind CSS.
                                </p>
                            </li>
                            <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Assest</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    Beautifully designed components built with Radix UI and
                                    Tailwind CSS.
                                </p>
                            </li>
                            <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Assest</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    Beautifully designed components built with Radix UI and
                                    Tailwind CSS.
                                </p>
                            </li>
                            <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Assest</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    Beautifully designed components built with Radix UI and
                                    Tailwind CSS.
                                </p>
                            </li>
                        </ul>

                    </NavigationMenuContent>



                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>



    )
}

Assest