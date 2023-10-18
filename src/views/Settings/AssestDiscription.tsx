import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { SelectSeparator } from "@/components/ui/select";

export function AssestDiscription() {
  return(

<>

  <div className="text-forground body-font overflow-hidden bg-red-300 ">
    <div className=" w-[70%] bg-red-200 px-4 py-12 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
          src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
        />
        <div className="space-y-10 lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

          <h1 className="text-3xl title-font font-medium mb-1">
            The Catcher in the Rye
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
