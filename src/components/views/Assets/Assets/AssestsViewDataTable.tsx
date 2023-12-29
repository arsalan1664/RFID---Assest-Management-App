import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ChevronsRight, Pencil, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Link } from "react-router-dom"

const data: TableDataType[] = [
  {
    id: 1,
    asset: "Mobile",
    site: "Al-fiza Tower Johar",
    location: "room no 5",
    category: "Electronics",
    assign_to: "Arsalan",
  },
  {
    "id": 2,
    "asset": "Laptop",
    "site": "XYZ Tower",
    "location": "Meeting Room 1",
    "category": "Electronics",
    "assign_to": "Bilal"
  },
  {
    "id": 3,
    "asset": "Desktop Computer",
    "site": "ABC Tower",
    "location": "Cubicle 123",
    "category": "Electronics",
    "assign_to": "Ali"
  },
  {
    "id": 4,
    "asset": "Printer",
    "site": "PQR Tower",
    "location": "Break Room",
    "category": "Office Equipment",
    "assign_to": "Zain"
  },
  {
    "id": 5,
    "asset": "Scanner",
    "site": "RST Tower",
    "location": "Storage Room",
    "category": "Office Equipment",
    "assign_to": "Umaima"
  }

]

export type TableDataType = {
  id: number
  asset: string
  site: string
  location: string
  category: string
  assign_to: string
}

export const columns: ColumnDef<TableDataType>[] = [

  {
    accessorKey: "asset",
    header: "Assest Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("asset")}</div>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <div className="capitalize">{row.getValue("category")}</div>
  },
  {
    accessorKey: "site",
    header:'Site',
    cell: ({ row }) => <div className="capitalize">{row.getValue("site")}</div>,
  },
  {
    accessorKey: "location",
    header:'Location',
    cell: ({ row }) => <div className="capitalize">{row.getValue("location")}</div>,
  },
  {
    accessorKey: "assign_to",
    header: "Assign to",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("assign_to")}</div>
    ),
  },
  {
    id: "actions",
    header: ()=> <div className="">Action</div>,
    // enableHiding: false,
    cell: () => {
      return (
        <div className="">
          <Button variant={"ghost"} size={"sm"}><Pencil size={16} /></Button>
          <Button variant={"ghost"} size={"sm"}><Trash2 size={16} /></Button>
          <Button variant={"ghost"} size={"sm"}>
            <Link to={'/settings/assests/:Id'} className="flex">
            <ChevronsRight size={20} />
            </Link>
          </Button>
        </div>
      )
    },
  },
]

export function AssestsViewDataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      {/* table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* pagination and row number */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Total of{" "}
          {table.getFilteredRowModel().rows.length} row(s).
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
