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

const TimeZoneData = [
    {
        Id: 1,
        TimeZone: "GMT +5",
        Country: "Pakistan",
    },
]

function TimeZoneDataTable() {
    return (
        <Table>
            <TableCaption>A list of your recent TimeZone.</TableCaption>
            <TableHeader className="bg-accent">
                <TableRow>
                    <TableHead className="text-center">Id</TableHead>
                    <TableHead className="text-center">TimeZone</TableHead>
                    <TableHead className="text-center ">Country</TableHead>
                    <TableHead className="text-center ">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {TimeZoneData.map((TimeZoneData) => (
                    <>
                        <TableRow key={TimeZoneData.Id}>
                            <TableCell className="text-center">
                                {TimeZoneData.Id}
                            </TableCell>
                            <TableCell>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm text-center font-medium leading-none truncate">
                                        {TimeZoneData.TimeZone}
                                    </p>
                                </div>
                            </TableCell>
                            <TableCell className="text-center">
                                {TimeZoneData.Country}
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
                <Button variant="outline">Add Time Zone</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[50%]">
                <DialogHeader>
                    <DialogTitle>Add TimeZone</DialogTitle>
                    <DialogDescription>
                        Add the detail about your TimeZone. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 gap-4 py-4">
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="TimeZone" className="text-right">
                            Time Zone
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
                        <Label htmlFor="Country" className="text-right">
                           Country
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="Country"
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


export function TimeZone() {
    return (
        < div className="hidden h-full flex-1 flex-col space-y-8 p-4 md:flex" >
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">TimeZone</h2>
                    <p className="text-muted-foreground">
                        Here&apos;s a list of your TimeZone !
                    </p>
                </div>
                <div className="flex items-center space-x-2 ">
                    <Dailog_Button />
                </div>
            </div>
            <TimeZoneDataTable />
        </div >
    )
}

