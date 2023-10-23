import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function AssestDiscription() {
  const navigate = useNavigate();
  const handleNavigate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/settings/assests");
  };
  return (
    <>
      <div className="text-forground body-font overflow-hidden bg-background">
        <div className="flex justify-end gap-3">
          <Button variant={"secondary"} onClick={handleNavigate}>
            <ChevronLeft size={20} />
            Back
          </Button>
        </div>
        <div className=" w-full px-2 py-12 mx-auto">
          <div className="lg:w-[75%] mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src="/rahul-chakraborty-xsGxhtAsfSA-unsplash.jpg"
            />
            <div className="space-y-4 lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div className="text-3xl font-medium space-y-2">
                <h1> Mobile </h1>
              </div>
                <Separator className="my-4"  />
              <div className="text-lg space-y-2 ">
                <div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Fam locavore kickstarter distillery. Mixtape chillwave
                      tumeric sriracha taximy chia microdosing tilde DIY. XOXO
                      fam indxgo
                    </p>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex h-5 items-center space-x-4 text-sm text-muted-foreground">
                    <div>Assign to : Arsalan Ali</div>
                    <Separator orientation="vertical" />
                    <div>Category : Computer</div>
                  </div>
                  <Separator  className="my-4" />
                  <div className="flex h-5 items-center space-x-4 text-sm text-muted-foreground">
                    <div>Site : Al-fiza Tower Joher</div>
                    <Separator orientation="vertical" />
                    <div>Location : Room-5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
