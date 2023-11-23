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

const BuildingsData = [
    {
        Id: 1,
        Countries: "Pakistan",
        Time_Zone: "GMT +5",
        Name: "Karachi",
    },
]

function BuildingsDataTable() {
    return (
        <Table>
            <TableCaption>A list of your recent BuildingsData.</TableCaption>
            <TableHeader className="bg-accent">
                <TableRow>
                    <TableHead className="text-center">Id</TableHead>
                    <TableHead className="text-center ">Countries</TableHead>
                    <TableHead className="text-center ">Time Zone</TableHead>
                    <TableHead className="text-center ">Name</TableHead>
                    <TableHead className="text-center ">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {BuildingsData.map((BuildingsData) => (
                    <>
                        <TableRow key={BuildingsData.Id}>
                            <TableCell className="text-center">
                                {BuildingsData.Id}
                            </TableCell>
                            <TableCell>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none truncate">
                                        {BuildingsData.Countries}
                                    </p>
                                </div>
                            </TableCell>
                            <TableCell className="text-center">
                                {BuildingsData.Name}
                            </TableCell>
                            <TableCell className="text-center">
                                {BuildingsData.Time_Zone}
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




export function Buildings() {
    return (
        < div className="hidden h-full flex-1 flex-col space-y-8 p-4 md:flex" >
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Buildings</h2>
                    <p className="text-muted-foreground">
                        Here&apos;s a list of your Buildings !
                    </p>
                </div>
                <div className="flex items-center space-x-2 ">
                    <DailogButtonSupplier />
                </div>
            </div>
            <BuildingsDataTable />
        </div >
    )
}

