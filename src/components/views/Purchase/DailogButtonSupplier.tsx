
import { DialogHeader, DialogFooter, Dialog, DialogTrigger, DialogContent, DialogDescription, DialogTitle } from "../../ui/dialog";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";

export function DailogButtonSupplier() {
    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button variant="outline">Add Assets</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[98%]">
                <DialogHeader>
                    <DialogTitle>Add Assets</DialogTitle>
                    <DialogDescription>
                        Add the detail about your asset. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                    {/* ### */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="Asset Name" className="text-right">
                            Asset Name
                        </Label>
                        <Input
                            id=""
                            defaultValue=""
                            placeholder="Asset Name"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Add Assests</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
