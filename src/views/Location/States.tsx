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
                    <TableHead className="text-center ">Countries</TableHead>
                    <TableHead className="text-center ">Time Zone</TableHead>
                    <TableHead className="text-center ">Name</TableHead>
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
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none truncate">
                                        {StatesData.Countries}
                                    </p>
                                </div>
                            </TableCell>
                            <TableCell className="text-center">
                                {StatesData.Name}
                            </TableCell>
                            <TableCell className="text-center">
                                {StatesData.Time_Zone}
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
                    <DailogButtonSupplier />
                </div>
            </div>
            <StatesDataTable />
        </div >
    )
}

