import { Button } from "@/components/ui/button";
import { SelectSeparator } from "@/components/ui/select";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function AssestDiscription() {
  const  navigate = useNavigate()
  const handleNavigate = ( e:React.MouseEvent<HTMLButtonElement> )=>{
    e.preventDefault()
    navigate('/settings/assests')
  }
  return(

<>

  <div className="text-forground body-font overflow-hidden bg-background">
    <div className="flex justify-end gap-3">
      <Button variant={"secondary"} onClick={handleNavigate}><ChevronLeft size={20} />Back</Button>
    </div>
    <div className=" w-full px-2 py-12 mx-auto">

      <div className="lg:w-[75%] mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
          src="/rahul-chakraborty-xsGxhtAsfSA-unsplash.jpg"
        />
        <div className="space-y-10 lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

          <h1 className="text-3xl title-font font-medium mb-1 space-y-4">
            <h1> Mobile </h1>
          <SelectSeparator />
          </h1>
          <p className="leading-relaxed">
            Fam locavore kickstarter distillery. Mixtape chillwave tumeric
            sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
            juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
            seitan poutine tumeric. Gastropub blue bottle austin listicle
            pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
          </p>
        </div>
      </div>
    </div>
  </div>

</>

  )
}
