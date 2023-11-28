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
                    <DailogButtonSupplier />
                </div>
            </div>
            <TimeZoneDataTable />
        </div >
    )
}

