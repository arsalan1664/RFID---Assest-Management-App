import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "./ui/textarea";
import { ScrollArea } from "./ui/scroll-area";

function DatePicker() {
  const [date, setDate] = React.useState<Date>();

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
  );
}

export function DailogButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Assets</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[95%] h-[85%] p-0">
        <ScrollArea className="h-full w-auto whitespace-nowrap p-8">
          <DialogHeader>
            <DialogTitle>Add Assets</DialogTitle>
            <DialogDescription>
              Add the detail about your asset. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          {/* ############################################# */}

          <div className="grid grid-cols-3 gap-4 py-8 ">
            {/* ### */}
            <div className="grid  grid-cols-5 items-center gap-4">
              <Label htmlFor="Asset Name" className="text-right col-span-2">
                Asset Name
              </Label>
              <Input
                id=""
                defaultValue=""
                placeholder="Asset Name"
                className="col-span-3"
              />
            </div>
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="Asset Number" className="text-right col-span-2">
                Asset Number
              </Label>
              <Input
                id="Asset Number"
                defaultValue=""
                placeholder="Asset Number"
                className="col-span-3"
              />
            </div>
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label
                htmlFor="Asset Tag Number"
                className="text-right col-span-2"
              >
                Asset Tag Number
              </Label>
              <Input
                id="Asset Tag Number"
                disabled
                defaultValue="AST231112342"
                className="col-span-3"
              />
            </div>
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="Asset Status" className="text-right col-span-2">
                Asset Status
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a Asset Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Faulty">Faulty</SelectItem>
                  <SelectItem value="Sent for Repair">
                    Sent for Repair
                  </SelectItem>
                  <SelectItem value="Ready for Disposal">
                    Ready for Disposal
                  </SelectItem>
                  <SelectItem value="Disposed Off">Disposed Off</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* ############################################# */}

          <div className="grid grid-cols-3 gap-4 py-8 ">
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="Asset Group" className="text-right col-span-2">
                Asset Group
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
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="Branch" className="text-right col-span-2">
                Branch
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a Branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">branch 1</SelectItem>
                  <SelectItem value="banana">branch 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="Department" className="text-right col-span-2">
                Department
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Department 1</SelectItem>
                  <SelectItem value="banana">Department 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="Floor" className="text-right col-span-2">
                Floor
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a Floor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Floor 1</SelectItem>
                  <SelectItem value="banana">Floor 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="Supplier" className="text-right col-span-2">
                Supplier
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a Supplier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Supplier 1</SelectItem>
                  <SelectItem value="banana">Supplier 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* ############################################# */}

          <div className="grid grid-cols-3 gap-4 py-8">
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor=" Yearly Depreciated" className="text-right col-span-2 ">
                Yearly Depreciated
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a  Yearly Depreciated %" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="20%">20%</SelectItem>
                  <SelectItem value="30%">30%</SelectItem>
                  <SelectItem value="40%">40%</SelectItem>
                  <SelectItem value="50%">50%</SelectItem>
                  <SelectItem value="100%">100%</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="Person Allocated to" className="text-right col-span-2">
                Person Allocated to
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a Person Allocated to" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Employee 1">Employee 1</SelectItem>
                  <SelectItem value="Employee 2">Employee2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="Asset Allocation Date" className="text-right col-span-2">
                Asset Allocation Date
              </Label>
              <DatePicker />
            </div>
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="name" className="text-right col-span-2">
                Date of Acquisition
              </Label>
              <DatePicker />
            </div>
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="Asset Life in Months" className="text-right col-span-2">
                Asset Life in Months
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Asset Life in Months" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="06">06</SelectItem>
                  <SelectItem value="12">12</SelectItem>
                  <SelectItem value="18">18</SelectItem>
                  <SelectItem value="24">24</SelectItem>
                  <SelectItem value="36">36</SelectItem>
                  <SelectItem value="48">48</SelectItem>
                  <SelectItem value="60">60</SelectItem>
                  <SelectItem value="72">72</SelectItem>
                  <SelectItem value="84">84</SelectItem>
                  <SelectItem value="96">96</SelectItem>
                  <SelectItem value="108">108</SelectItem>
                  <SelectItem value="120">120</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="Start Depreciation" className="text-right col-span-2">
                Start Depreciation
              </Label>
              <Input
                id="Start Depreciation"
                defaultValue=""
                placeholder="Start Depreciation"
                className="col-span-3"
              />
            </div>
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="Salvage Value" className="text-right col-span-2">
                Salvage Value
              </Label>
              <Input
                id=""
                defaultValue=""
                placeholder="Salvage Value"
                className="col-span-3"
              />
            </div>
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="Brand" className="text-right col-span-2">
                Brand
              </Label>
              <Input
                id=""
                defaultValue=""
                placeholder="Brand"
                className="col-span-3"
              />
            </div>
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="Purchase Price" className="text-right col-span-2">
                Purchase Price
              </Label>
              <Input
                id="Purchase Price"
                defaultValue=""
                placeholder="Purchase Price"
                className="col-span-3"
              />
            </div>
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="name" className="text-right col-span-2">
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
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="Serial Number" className="text-right col-span-2">
                Serial Number
              </Label>
              <Input
                id="Serial Number"
                defaultValue=""
                placeholder="Serial Number"
                className="col-span-3"
              />
            </div>
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="Purchase Order Number" className="text-right col-span-2">
                Purchase Order Number
              </Label>
              <Input
                id="Purchase Order Number"
                defaultValue=""
                placeholder="Purchase Order Number"
                className="col-span-3"
              />
            </div>
          </div>

          {/* ############################################# */}

          <div className="grid grid-cols-3 gap-4 py-8">
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="Description" className="text-right col-span-2">
                Description
              </Label>
              <Textarea
                placeholder="Type Description here."
                className="col-span-3"
              />
            </div>
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="Remarks" className="text-right col-span-2">
                Remarks
              </Label>
              <Textarea
                placeholder="Type Remarks here."
                className="col-span-3"
              />
            </div>
            {/* #### */}
            <div className="grid grid-cols-5 items-center gap-4">
              <Label htmlFor="username" className="text-right col-span-2">
                Asset Picture
              </Label>
              <Input id="picture" type="file" className="col-span-3" />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit">Add Assests</Button>
          </DialogFooter>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
