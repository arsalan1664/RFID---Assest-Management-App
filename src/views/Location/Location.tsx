import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const LocationData = [
    {
        Id: 1,
        Countries: "Al-fiza Tower",
        Time_Zone: "GMT +5",
        Name: "Karachi",
    },
]

function LocationDataTable() {
    return (
        <Table>
            <TableCaption>A list of your recent LocationData.</TableCaption>
            <TableHeader className="bg-accent">
                <TableRow>
                    <TableHead className="text-center">Id</TableHead>
                    <TableHead className="text-center ">Location</TableHead>
                    <TableHead className="text-center ">City</TableHead>
                    <TableHead className="text-center ">Time Zone</TableHead>
                    <TableHead className="text-center ">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {LocationData.map((LocationData) => (
                    <>
                        <TableRow key={LocationData.Id}>
                            <TableCell className="text-center">
                                {LocationData.Id}
                            </TableCell>
                            <TableCell>
                                <div className="text-center space-y-1">
                                    <p className="text-sm font-medium leading-none truncate">
                                        {LocationData.Countries}
                                    </p>
                                </div>
                            </TableCell>
                            <TableCell className="text-center">
                                {LocationData.Name}
                            </TableCell>
                            <TableCell className="text-center">
                                {LocationData.Time_Zone}
                            </TableCell>
                            <TableCell className="text-center">
                                <Button variant={"ghost"} size={"sm"}><Pencil size={16} /></Button>
                                <Button variant={"ghost"} size={"sm"}><Trash2 size={16} /></Button>
                            </TableCell>

                        </TableRow>
                    </>
                ))}
            </TableBody>
        </Table>
    );
}


function Dailog_Button() {
    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button variant="outline">Add Location</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[50%]">
                <DialogHeader>
                    <DialogTitle>Add Location</DialogTitle>
                    <DialogDescription>
                        Add the detail about your Location. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 gap-4 py-4">
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Location" className="text-right">
                            Location
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="Location"
                            className="col-span-3"
                        />
                    </div>
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Countries" className="text-right">
                            Countries
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="Countries"
                            className="col-span-3"
                        />
                    </div>
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Time Zone" className="text-right">
                            Time Zone
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="Time Zone"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export function Location() {
    return (
        < div className="hidden h-full flex-1 flex-col space-y-8 p-4 md:flex" >
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Location</h2>
                    <p className="text-muted-foreground">
                        Here&apos;s a list of your location !
                    </p>
                </div>
                <div className="flex items-center space-x-2 ">
                    <Dailog_Button />
                </div>
            </div>
            <LocationDataTable />
        </div >
    )
}

