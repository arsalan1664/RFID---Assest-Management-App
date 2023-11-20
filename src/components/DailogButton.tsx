import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DailogButton() {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="outline">Add Assets</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[98%]">
        <DialogHeader>
          <DialogTitle>Add Assets</DialogTitle>
          <DialogDescription>
            Add the detail about your asset. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          {/* ###3 */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Asset Code
            </Label>
            <Input
              id=""
              defaultValue=""
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Aseest Number
            </Label>
            <Input
              id="username"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Assest Group
            </Label>
            <Input
              id=""
              defaultValue=""
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Branch
            </Label>
            <Input
              id=""
              defaultValue=""
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Department / Floor
            </Label>
            <Input
              id="username"
              defaultValue=""
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Asset Description
            </Label>
            <Input
              id=""
              defaultValue=""
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Asset tag number
            </Label>
            <Input
              id=""
              defaultValue=""
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Date of Acquisition
            </Label>
            <Input
              id=""
              defaultValue=""
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Start Depreciation
            </Label>
            <Input
              id=""
              defaultValue=""
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Asset Life in months
            </Label>
            <Input
              id=""
              defaultValue=""
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Salvage Value
            </Label>
            <Input
              id=""
              defaultValue=""
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Make
            </Label>
            <Input
              id=""
              defaultValue=""
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Model
            </Label>
            <Input
              id=""
              defaultValue=""
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Serial number
            </Label>
            <Input
              id=""
              defaultValue=""
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name of contractor/vendor
            </Label>
            <Input
              id=""
              defaultValue=""
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Purchase order number
            </Label>
            <Input
              id=""
              defaultValue=""
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Remarks
            </Label>
            <Input
              id=""
              defaultValue=""
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Asset Picture
            </Label>
            <Input
              id=""
              defaultValue=""
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add Assests</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}







