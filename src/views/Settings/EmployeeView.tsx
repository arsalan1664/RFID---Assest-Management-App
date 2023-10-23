import { AssestsViewDataTable } from "@/components/AssestsViewDataTable"
import { DailogButton } from "@/components/DailogButton"
import { EmployeeViewDataTable } from "@/components/EmployeeDataTable"



function EmployeeView() {
  return (
    < div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex" >
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Employee</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your employee !
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <DailogButton />
        </div>
      </div>
      <EmployeeViewDataTable />
    </div >
  )
}

export default EmployeeView
