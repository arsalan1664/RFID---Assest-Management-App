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

const LanguageData = [
    {
        Id: 1,
        Room: "3",
        Floor: "4",
        Device: "Moblie",
        Antenna: "...",
    },
]

function LanguageDataTable() {
    return (
        <Table>
            <TableCaption>A list of your recent LanguageData.</TableCaption>
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
                {LanguageData.map((LanguageData) => (
                    <>
                        <TableRow key={LanguageData.Id}>
                            <TableCell className="text-center">
                                {LanguageData.Id}
                            </TableCell>
                            <TableCell>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm text-center font-medium leading-none truncate">
                                        {LanguageData.Room}
                                    </p>
                                </div>
                            </TableCell>
                            <TableCell className="text-center">
                                {LanguageData.Floor}
                            </TableCell>
                            <TableCell className="text-center">
                                {LanguageData.Device}
                            </TableCell>
                            <TableCell className="text-center">
                                {LanguageData.Antenna}
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




export function Language() {
    return (
        < div className="hidden h-full flex-1 flex-col space-y-8 p-4 md:flex" >
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Language</h2>
                    <p className="text-muted-foreground">
                        Here&apos;s a list of your Language !
                    </p>
                </div>
                <div className="flex items-center space-x-2 ">
                    <DailogButtonSupplier />
                </div>
            </div>
            <LanguageDataTable />
        </div >
    )
}

