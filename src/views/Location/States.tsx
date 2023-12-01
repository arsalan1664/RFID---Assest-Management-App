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
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const StatesData = [
    {
        Id: 1,
        Countries: "Pakistan",
        Time_Zone: "GMT +5",
        Name: "Karachi",
    },
]

function StatesDataTable() {
    return (
        <Table>
            <TableCaption>A list of your recent StatesData.</TableCaption>
            <TableHeader className="bg-accent">
                <TableRow>
                    <TableHead className="text-center">Id</TableHead>
                    <TableHead className="text-center ">State </TableHead>
                    <TableHead className="text-center ">Time Zone</TableHead>
                    <TableHead className="text-center ">Countries</TableHead>
                    <TableHead className="text-center ">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {StatesData.map((StatesData) => (
                    <>
                        <TableRow key={StatesData.Id}>
                            <TableCell className="text-center">
                                {StatesData.Id}
                            </TableCell>
                            <TableCell>
                                <div className="text-center space-y-1">
                                    <p className="text-sm font-medium leading-none truncate">
                                        {StatesData.Name}
                                    </p>
                                </div>
                            </TableCell>
                            <TableCell className="text-center">
                                {StatesData.Time_Zone}
                            </TableCell>
                            <TableCell className="text-center">
                                {StatesData.Countries}
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
                <Button variant="outline">Add State</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[50%]">
                <DialogHeader>
                    <DialogTitle>Add State</DialogTitle>
                    <DialogDescription>
                        Add the detail about your State. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 gap-4 py-4">
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
                        <Label htmlFor="TimeZone" className="text-right">
                            TimeZone
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="TimeZone"
                            className="col-span-3"
                        />
                    </div>
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Country Name" className="text-right">
                            Country Name
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="Country Name"
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


export function States() {
    return (
        < div className="hidden h-full flex-1 flex-col space-y-8 p-4 md:flex" >
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">States</h2>
                    <p className="text-muted-foreground">
                        Here&apos;s a list of your States !
                    </p>
                </div>
                <div className="flex items-center space-x-2 ">
                    <Dailog_Button />
                </div>
            </div>
            <StatesDataTable />
        </div >
    )
}

