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

const RoomsData = [
    {
        Id: 1,
        Room: "3",
        Floor: "4",
        Device: "Moblie",
        Antenna: "...",
    },
]

function RoomsDataTable() {
    return (
        <Table>
            <TableCaption>A list of your recent RoomsData.</TableCaption>
            <TableHeader className="bg-accent">
                <TableRow>
                    <TableHead className="text-center">Id</TableHead>
                    <TableHead className="text-center">Room</TableHead>
                    <TableHead className="text-center ">Floor</TableHead>
                    <TableHead className="text-center ">Device</TableHead>
                    <TableHead className="text-center ">Antenna</TableHead>
                    <TableHead className="text-center ">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {RoomsData.map((RoomsData) => (
                    <>
                        <TableRow key={RoomsData.Id}>
                            <TableCell className="text-center">
                                {RoomsData.Id}
                            </TableCell>
                            <TableCell>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm text-center font-medium leading-none truncate">
                                        {RoomsData.Room}
                                    </p>
                                </div>
                            </TableCell>
                            <TableCell className="text-center">
                                {RoomsData.Floor}
                            </TableCell>
                            <TableCell className="text-center">
                                {RoomsData.Device}
                            </TableCell>
                            <TableCell className="text-center">
                                {RoomsData.Antenna}
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
                <Button variant="outline">Add Room</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[50%]">
                <DialogHeader>
                    <DialogTitle>Add Room</DialogTitle>
                    <DialogDescription>
                        Add the detail about your Room. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 gap-4 py-4">
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Room" className="text-right">
                            Room
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="Room"
                            className="col-span-3"
                        />
                    </div>
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Floor" className="text-right">
                            Floor
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="Floor"
                            className="col-span-3"
                        />
                    </div>
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Device" className="text-right">
                            Device
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="Device"
                            className="col-span-3"
                        />
                    </div>
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Antenna" className="text-right">
                            Antenna
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="Antenna"
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


export function Rooms() {
    return (
        < div className="hidden h-full flex-1 flex-col space-y-8 p-4 md:flex" >
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Rooms</h2>
                    <p className="text-muted-foreground">
                        Here&apos;s a list of your Rooms !
                    </p>
                </div>
                <div className="flex items-center space-x-2 ">
                    <Dailog_Button />
                </div>
            </div>
            <RoomsDataTable />
        </div >
    )
}

