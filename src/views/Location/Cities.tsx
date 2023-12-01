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

const CitiesData = [
    {
        Id: 1,
        City: "Karachi",
        Countries: "Pakistan",
        State: "Sindh",
        Time_Zone: "GMT +5",
    },
]

function CitiesDataTable() {
    return (
        <Table>
            <TableCaption>A list of your recent CitiesData.</TableCaption>
            <TableHeader className="bg-accent">
                <TableRow>
                    <TableHead className="text-center">Id</TableHead>
                    <TableHead className="text-center">City</TableHead>
                    <TableHead className="text-center ">Countries</TableHead>
                    <TableHead className="text-center ">State</TableHead>
                    <TableHead className="text-center ">Time Zone</TableHead>
                    <TableHead className="text-center ">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {CitiesData.map((CitiesData) => (
                    <>
                        <TableRow key={CitiesData.Id}>
                            <TableCell className="text-center">
                                {CitiesData.Id}
                            </TableCell>
                            <TableCell>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none truncate">
                                        {CitiesData.City}
                                    </p>
                                </div>
                            </TableCell>
                            <TableCell className="text-center">
                                {CitiesData.Countries}
                            </TableCell>
                            <TableCell className="text-center">
                                {CitiesData.State}
                            </TableCell>
                            <TableCell className="text-center">
                                {CitiesData.Time_Zone}
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
                <Button variant="outline">Add City</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[50%]">
                <DialogHeader>
                    <DialogTitle>Add City</DialogTitle>
                    <DialogDescription>
                        Add the detail about your City. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 gap-4 py-4">
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="City" className="text-right">
                            City
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="City"
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
                        <Label htmlFor="State" className="text-right">
                            State
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="State"
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


export function Cities() {
    return (
        < div className="hidden h-full flex-1 flex-col space-y-8 p-4 md:flex" >
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Cities</h2>
                    <p className="text-muted-foreground">
                        Here&apos;s a list of your Cities !
                    </p>
                </div>
                <div className="flex items-center space-x-2 ">
                    <Dailog_Button />
                </div>
            </div>
            <CitiesDataTable />
        </div >
    )
}

