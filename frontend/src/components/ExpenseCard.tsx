import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { AddExpenseCard } from "./AddExpenseCard";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Edit,
    Delete,
} from "lucide-react"

export const ExpenseCard = () => {
    return (
        <div>
            <Card className="w-[300px]">

                <CardHeader className="flex flex-row justify-between">
                    <CardTitle>Food</CardTitle>
                    <DropdownMenu>

                        <DropdownMenuTrigger asChild>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                            </svg>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="w-40" align="start">
                            <DropdownMenuGroup>
                                <AddExpenseCard title="Edit Expense">
                                    <Button variant="ghost" className="w-full justify-start">
                                        <Edit className="mr-2 h-4 w-4" />
                                        <span>Edit</span>
                                    </Button>
                                </AddExpenseCard>
                                <Button variant="ghost" className="w-full justify-start text-red-400">
                                    <Delete className="mr-2 h-4 w-4" />
                                    <span>Delete</span>
                                </Button>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>

                    </DropdownMenu>

                </CardHeader>

                <CardContent>
                    <CardDescription>This is description</CardDescription>
                </CardContent>

                <CardFooter className="flex justify-between">
                    <Button variant="secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        500
                    </Button>
                    <Badge>Type</Badge>
                </CardFooter>
            </Card>
        </div >
    )
}
