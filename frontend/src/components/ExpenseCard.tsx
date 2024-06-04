import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { AddExpenseCard } from "./AddExpenseCard";

export const ExpenseCard = () => {
    return (
        <div>
            <Card className="w-[300px]">
                <AddExpenseCard title="Edit Expense">
                    <CardHeader className="flex flex-row justify-between">
                        <CardTitle>Food</CardTitle>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                    </CardHeader>
                </AddExpenseCard>

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
        </div>
    )
}
