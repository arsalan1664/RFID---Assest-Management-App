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

const SuppliersData = [
    {
        id: 1,
        country: "pakistan",
        state: "sindh",
        city: "karachi",
        company: "Rfid",
        name: "arsalan",
        email: 'a@a.com',
        phone: '0306000000',
        address: "fiza tower",
        zip_code: 74182,
    },
]

function SuppliersDataTable() {
    return (
        <Table>
            <TableCaption>A list of your recent SuppliersData.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Id</TableHead>
                    <TableHead className="pl-8">Country</TableHead>
                    <TableHead className="text-center ">State</TableHead>
                    <TableHead className="text-center ">City</TableHead>
                    <TableHead className="text-center ">Company</TableHead>
                    <TableHead className="text-center ">Name</TableHead>
                    <TableHead className="text-center ">Email</TableHead>
                    <TableHead className="text-center ">Phone</TableHead>
                    <TableHead className="text-center ">Adress</TableHead>
                    <TableHead className="text-center ">Zip Code</TableHead>
                    <TableHead className="text-center ">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {SuppliersData.map((SuppliersData) => (
                    <>
                        <TableRow key={SuppliersData.id}>

                            <TableCell>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none truncate">
                                        {SuppliersData.city}
                                    </p>
                                </div>
                            </TableCell>

                            <TableCell className="text-center">
                                {SuppliersData.address}
                            </TableCell>
                        </TableRow>
                    </>
                ))}
            </TableBody>
        </Table>
    );
}




export function Suppliers() {
    return (
        < div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex" >
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Suppliers</h2>
                    <p className="text-muted-foreground">
                        Here&apos;s a list of your suppliers !
                    </p>
                </div>
                <div className="flex items-center space-x-2 ">
                    <DailogButton />
                </div>
            </div>
            <SuppliersDataTable />
        </div >
    )
}

