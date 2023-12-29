// import { DataTable } from "@/components/DataTable"
// import { DailogButton } from "@/components/DailogButton"
import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"

function Index() {
    return (
        <div className="grid lg:grid-cols-6">
            <Sidebar />
            <div className="col-span-3 lg:col-span-5 lg:border-l">
                <div className="h-full px-2 py-6 lg:px-2">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Index