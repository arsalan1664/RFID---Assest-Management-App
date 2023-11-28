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

const CompaniesData = [
    {
        Id: 1,
        Name: "TechITSystem",
        Contact_Person: "Arsalan",
        Contact_Phone: "03000000",
        Website: "Moblie",
        DateTime_Created: "...",
    },
]

function CompaniesDataTable() {
    return (
        <Table>
            <TableCaption>A list of your recent CompaniesData.</TableCaption>
            <TableHeader className="bg-accent">
                <TableRow>
                    <TableHead className="text-center">Id</TableHead>
                    <TableHead className="text-center">Name</TableHead>
                    <TableHead className="text-center ">Contact_Person</TableHead>
                    <TableHead className="text-center ">Contact_Phone</TableHead>
                    <TableHead className="text-center ">Website</TableHead>
                    <TableHead className="text-center ">DateTime_Created</TableHead>
                    <TableHead className="text-center ">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {CompaniesData.map((CompaniesData) => (
                    <>
                        <TableRow key={CompaniesData.Id}>
                            <TableCell className="text-center">
                                {CompaniesData.Id}
                            </TableCell>
                            <TableCell>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm text-center font-medium leading-none truncate">
                                        {CompaniesData.Name}
                                    </p>
                                </div>
                            </TableCell>
                            <TableCell className="text-center">
                                {CompaniesData.Contact_Person}
                            </TableCell>
                            <TableCell className="text-center">
                                {CompaniesData.Contact_Phone}
                            </TableCell>
                            <TableCell className="text-center">
                                {CompaniesData.Website}
                            </TableCell>
                            <TableCell className="text-center">
                                {CompaniesData.DateTime_Created}
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




export function Companies() {
    return (
        < div className="hidden h-full flex-1 flex-col space-y-8 p-4 md:flex" >
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Companies</h2>
                    <p className="text-muted-foreground">
                        Here&apos;s a list of your Companies !
                    </p>
                </div>
                <div className="flex items-center space-x-2 ">
                    <DailogButtonSupplier />
                </div>
            </div>
            <CompaniesDataTable />
        </div >
    )
}

