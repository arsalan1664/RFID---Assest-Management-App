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

const CountinentsData = [
    {
        Id: 1,
        Name: "Asia",
    },
]

function CountinentsDataTable() {
    return (
        <Table>
            <TableCaption>A list of your recent CountinentsData.</TableCaption>
            <TableHeader className="bg-accent">
                <TableRow>
                    <TableHead className="text-center">Id</TableHead>
                    <TableHead className="text-center ">Name</TableHead>
                    <TableHead className="text-center ">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {CountinentsData.map((CountinentData) => (
                    <>
                        <TableRow key={CountinentData.Id}>
                            <TableCell className="text-center">
                                {CountinentData.Id}
                            </TableCell>
                            <TableCell>
                                <div className=" space-y-1">
                                    <p className="text-sm font-medium leading-none truncate text-center">
                                        {CountinentData.Name}
                                    </p>
                                </div>
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




export function Countinent() {
    return (
        < div className="hidden h-full flex-1 flex-col space-y-8 p-4 md:flex" >
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Countinents</h2>
                    <p className="text-muted-foreground">
                        Here&apos;s a list of your Countinents !
                    </p>
                </div>
                <div className="flex items-center space-x-2 ">
                    <DailogButtonSupplier />
                </div>
            </div>
            <CountinentsDataTable />
        </div >
    )
}

