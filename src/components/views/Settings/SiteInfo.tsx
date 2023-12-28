import { DailogButton } from "@/components/DailogButton"
import { DataTable } from "@/components/DataTable"


function SiteInfo() {
  return (
    < div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex" >
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Site Information</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your sites !
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <DailogButton />
        </div>
      </div>
      <DataTable />
    </div >
  )
}

export default SiteInfo
