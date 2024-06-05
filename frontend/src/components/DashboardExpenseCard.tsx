import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";

export const DashboardExpenseCard = () => {
    return (
        <div>
            <Card className="w-[350px]">
                <CardHeader className="flex flex-row justify-between">
                    <CardTitle>Income</CardTitle>
                    <Badge>Type</Badge>
                </CardHeader>

                <CardContent>
                    <CardDescription>This is description</CardDescription>
                </CardContent>

                <CardFooter className="flex justify-between">
                    <Button variant="secondary" className="text-green-500">
                        {/* +(PLUS) SIGN  */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                        {/* RUPEES SIGN */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        500
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
