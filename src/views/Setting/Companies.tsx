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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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


function Dailog_Button() {
    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button variant="outline">Add Company</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[50%]">
                <DialogHeader>
                    <DialogTitle>Add Company</DialogTitle>
                    <DialogDescription>
                        Add the detail about your asset. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 gap-4 py-4">
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Asset Name" className="text-right">
                            Company Name
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="Company Name"
                            className="col-span-3"
                        />
                    </div>
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Contact_Person" className="text-right">
                            Contact_Person
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="Contact_Person"
                            className="col-span-3"
                        />
                    </div>
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Contact_Phone" className="text-right">
                            Contact_Phone
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="Contact_Phone"
                            className="col-span-3"
                        />
                    </div>
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Website" className="text-right">
                            Website
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="Website"
                            className="col-span-3"
                        />
                    </div>
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="DateTime_Created" className="text-right">
                            DateTime Created
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="DateTime_Created"
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
                    <Dailog_Button />
                </div>
            </div>
            <CompaniesDataTable />
        </div >
    )
}

