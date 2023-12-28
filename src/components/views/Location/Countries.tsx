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

const CountriesData = [
    {
        Id: 1,
        Time_Zone: "GMT +5",
        Name: "Pakistan",
        Region: "Karachi",
        Iso2: "...",
        Iso3: "...",
        Iso: '...',
        Phone: '0306000000',
    },
]

function CountriesDataTable() {
    return (
        <Table>
            <TableCaption>A list of your recent CountriesData.</TableCaption>
            <TableHeader className="bg-accent">
                <TableRow>
                    <TableHead className="text-center">Id</TableHead>
                    <TableHead className="text-center ">Time Zone</TableHead>
                    <TableHead className="text-center ">Name</TableHead>
                    <TableHead className="text-center ">Region</TableHead>
                    <TableHead className="text-center ">Iso2</TableHead>
                    <TableHead className="text-center">Iso3</TableHead>
                    <TableHead className="text-center ">Iso_num</TableHead>
                    <TableHead className="text-center ">Phone</TableHead>
                    <TableHead className="text-center ">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {CountriesData.map((CountriesData) => (
                    <>
                        <TableRow key={CountriesData.Id}>
                            <TableCell className="text-center">
                                {CountriesData.Id}
                            </TableCell>
                            <TableCell>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none truncate">
                                        {CountriesData.Time_Zone}
                                    </p>
                                </div>
                            </TableCell>
                            <TableCell className="text-center">
                                {CountriesData.Name}
                            </TableCell>
                            <TableCell className="text-center">
                                {CountriesData.Region}
                            </TableCell>
                            <TableCell className="text-center">
                                {CountriesData.Iso2}
                            </TableCell>
                            <TableCell className="text-center">
                                {CountriesData.Iso3}
                            </TableCell>
                            <TableCell className="text-center">
                                {CountriesData.Iso}
                            </TableCell>
                            <TableCell className="text-center">
                                {CountriesData.Phone}
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
                <Button variant="outline">Add Countries</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[50%]">
                <DialogHeader>
                    <DialogTitle>Add Countries</DialogTitle>
                    <DialogDescription>
                        Add the detail about your asset. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 gap-4 py-4">
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Time Zone" className="text-right">
                            TimeZone
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="Time Zone"
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
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Region" className="text-right">
                            Region
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="Region"
                            className="col-span-3"
                        />
                    </div>
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Iso2" className="text-right">
                            Iso2
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="Iso2"
                            className="col-span-3"
                        />
                    </div>
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Iso3" className="text-right">
                            Iso3
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="Iso3"
                            className="col-span-3"
                        />
                    </div>
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Iso num" className="text-right">
                            Iso num
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="Iso num"
                            className="col-span-3"
                        />
                    </div>
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Phone" className="text-right">
                            Phone
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="Phone"
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



export function Countries() {
    return (
        < div className="hidden h-full flex-1 flex-col space-y-8 p-4 md:flex" >
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Countries</h2>
                    <p className="text-muted-foreground">
                        Here&apos;s a list of your countries !
                    </p>
                </div>
                <div className="flex items-center space-x-2 ">
                    <Dailog_Button />
                </div>
            </div>
            <CountriesDataTable />
        </div >
    )
}

