import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { DailogButton } from "@/components/DailogButton"
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { DailogButtonSupplier } from "@/components/DailogButtonSupplier";

const LocationData = [
    {
        Id: 1,
        Countries: "Pakistan",
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
                                <div className="ml-4 space-y-1">
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
                    <DailogButtonSupplier />
                </div>
            </div>
            <LocationDataTable />
        </div >
    )
}

