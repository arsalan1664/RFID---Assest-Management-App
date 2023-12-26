import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Shell } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserLogin({}: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function HandleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <Card className="bg-accent p-4">
        <CardHeader>
          <CardTitle>
          {/* AUth containner */}
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Login your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          </CardTitle>
        </CardHeader>

        {/* UserAuthForm start*/}
        <CardContent>
          <div className="grid gap-6">
            <form onSubmit={HandleSubmit}>
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <Input
                    id="email"
                    placeholder="Email.."
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                  />
                </div>
                <div className="grid gap-1">
                  <Input
                    id="email"
                    placeholder="Passward.."
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                  />
                </div>
                <Button disabled={isLoading} className="mt-2">
                  {isLoading && <Shell className="mr-2  h-4 w-4 animate-spin" />}
                  Log In
                </Button>

                <p className="px-8 text-center text-sm text-muted-foreground ">
                  Dont have an account,{" "}
                  <Link
                    to="/auth/register"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    Register
                  </Link>{" "}
                  .
                </p>
              </div>
            </form>
          </div>
        </CardContent>
        {/* UserAuthForm ends */}
      </Card>
    </div>
  );
}
