import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link, Outlet } from 'react-router-dom'
// import {UserLogin} from '../components/UserLogin'


function Auth() {
    return (
        <div className="container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <Link
                to="/"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "absolute right-4 top-4 md:right-8 md:top-8"
                )}
            >
                Skip
            </Link>
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <div className="absolute inset-0 bg-zinc-900" />
                <div className="relative z-20 flex items-center text-lg font-medium ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-6 w-6"
                    >
                        <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                        <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                        <circle cx="12" cy="12" r="2" />
                        <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                        <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
                    </svg>
                    RFID PAKISTAN
                </div>
                <div className='text-white text-4xl h-10 w-10 z-30 flex items-center justify-center h-full w-full'>

                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 mt-20 h-20 w-20"
                    >
                        <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                        <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                        <circle cx="12" cy="12" r="2" />
                        <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                        <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
                    </svg>

                </div>
                <div className="relative z-20 mt-auto ">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            &ldquo;I've been using the RFID Pakistan for over a year now, and I can honestly say that it's one of the best investments I've ever made. It's made my life so much easier and more efficient in so many ways.&rdquo;
                        </p>
                        <footer className="text-sm">John Smith</footer>
                    </blockquote>
                </div>
            </div>

            
            
             <div className="lg:p-8">

                {/* <UserLogin/> */}
                <Outlet/>
               
            </div> 


        </div>
    )
}

export default Auth


