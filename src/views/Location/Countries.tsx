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
                    <DailogButtonSupplier />
                </div>
            </div>
            <CountriesDataTable />
        </div >
    )
}

