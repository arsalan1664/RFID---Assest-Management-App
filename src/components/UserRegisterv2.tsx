import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Github, GithubIcon, GoalIcon, Shell } from "lucide-react"
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }



export function UserRegister({ }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    async function HandleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }
    return (
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">



            {/* UserAuthForm start*/}

            <div className="grid gap-6">
                <form onSubmit={HandleSubmit}>
                    <Card>
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-2xl">Create an account</CardTitle>
                            <CardDescription>
                                Enter your email below to create your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            
                           
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="m@example.com" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Create account</Button>
                        </CardFooter>
                    </Card>
                </form>

            </div>

            {/* UserAuthForm ends */}









        </div>


    )
}
