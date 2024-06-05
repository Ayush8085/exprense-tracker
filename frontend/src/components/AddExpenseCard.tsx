import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ReactNode } from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export function AddExpenseCard({
  children,
  title
}: {
  children: ReactNode,
  title: string,
}) {

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Add the expense here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-3 items-center gap-4">
            <Input
              type="text"
              placeholder="Title"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Input
              type="number"
              placeholder="Price"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Type of expense" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="income">Income</SelectItem>
                  <SelectItem value="expense">Expense</SelectItem>
                  <SelectItem value="rented">Rent</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Input
              type="text"
              placeholder="Description"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add expense</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
