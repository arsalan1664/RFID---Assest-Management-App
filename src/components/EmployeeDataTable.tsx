import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const invoices = [
  {
    Id: 1,
    Img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Name: "Arsalan",
    Assests_Assign: 5,
  },
  {
    Id: 2,
    Img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Name: "Ali",
    Assests_Assign: 6,
  },
  {
    Id: 1,
    Img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Name: "Nabeel",
    Assests_Assign: 3,
  },
]

export function EmployeeViewDataTable() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Employee</TableHead>
          <TableHead className="pl-8">Name</TableHead>
          <TableHead className="text-center ">No of Assests Assign</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <>
            <TableRow key={invoice.Id}>
              <TableCell>
                <Avatar className="h-9 w-9">
                  <AvatarImage src={invoice.Img} alt="Avatar" />
                  <AvatarFallback>Om</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none truncate">
                    {invoice.Name}
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-center">
                {invoice.Assests_Assign}
              </TableCell>
            </TableRow>
          </>
        ))}
      </TableBody>
    </Table>
  );
}
