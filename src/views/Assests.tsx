import { Sidebar } from "@/components/Sidebar"
import { DataTable } from "@/components/DataTable"
import { DailogButton } from "@/components/DailogButton"

function Assests() {
    return (
        <div className="grid lg:grid-cols-5">
            <Sidebar />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                    {/* rightbar */}
                    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                        <div className="flex items-center justify-between space-y-2">
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight">Assest</h2>
                                <p className="text-muted-foreground">
                                    Here&apos;s a list of your Assest !
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <DailogButton/>
                            </div>
                        </div>
                        <DataTable/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assests