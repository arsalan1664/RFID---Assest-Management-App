import { DailogButton } from "@/components/DailogButton"
import { DataTable } from "@/components/DataTable"
import CompanyInfoForm from "./CompanyInfoForm";


function CompanyInfo() {
  return (
    < div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex" >
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Company Information</h2>
          <p className="text-muted-foreground">
            Here&apos;s Enter your company Information !
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <DailogButton />
        </div>
      </div>
      {/* <DataTable /> */}
      <CompanyInfoForm/>
    </div >
  )
}

export default CompanyInfo