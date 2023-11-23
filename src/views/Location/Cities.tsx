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
                    <DailogButtonSupplier />
                </div>
            </div>
            <CitiesDataTable />
        </div >
    )
}

