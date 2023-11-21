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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "./ui/textarea"



function DatePicker() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "col-span-3 justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}



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
          {/* ### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Asset name
            </Label>
            <Input
              id=""
              defaultValue=""
              placeholder="Asset name"
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Asset number" className="text-right">
              Asset number
            </Label>
            <Input
              id="Asset number"
              defaultValue=""
              placeholder="Asset number"
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Asset tag number" className="text-right">
              Asset tag number
            </Label>
            <Input
              id="Asset tag number"
              disabled
              defaultValue="AST231112342"
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Supplier" className="text-right">
              Supplier
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a supplier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Supplier 1</SelectItem>
                <SelectItem value="banana">Supplier 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Asset group" className="text-right">
              Asset group
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Group 1</SelectItem>
                <SelectItem value="banana">Group 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Branch" className="text-right">
              Branch
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">branch 1</SelectItem>
                <SelectItem value="banana">branch 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Department" className="text-right">
              Department
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Department 1</SelectItem>
                <SelectItem value="banana">Department 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Floor" className="text-right">
              Floor
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a floor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Floor 1</SelectItem>
                <SelectItem value="banana">Floor 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Date of Acquisition
            </Label>
            <DatePicker />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Asset Life in months
            </Label>
            <Input
              id=""
              defaultValue=""
              placeholder="Asset Life in months"
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Start depreciation
            </Label>
            <Input
              id=""
              defaultValue=""
              placeholder="Start depreciation"
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Salvage value" className="text-right">
              Salvage value
            </Label>
            <Input
              id=""
              defaultValue=""
              placeholder="Salvage value"
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
              placeholder="Make"
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
              placeholder="Model"
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
              placeholder="Serial number"
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
              placeholder="Name of contractor/vendor"
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
              placeholder="Purchase order number"
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
              placeholder="Remarks"
              className="col-span-3"
            />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Asset Description
            </Label>
            <Textarea placeholder="Type discription here." className="col-span-3" />
          </div>
          {/* #### */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Asset Picture
            </Label>
            <Input id="picture" type="file" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add Assests</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}













