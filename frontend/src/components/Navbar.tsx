import { AddExpenseCard } from "./AddExpenseCard";
import { Button } from "./ui/button"

const Navbar = () => {

    return (
        <div className="p-4 min-h-[10%] flex justify-between">
            <div className="">
                <Button variant="link">Dashboard</Button>
                <Button variant="link">Login</Button>
                <Button variant="link">Signup</Button>
                <Button variant="link">Logout</Button>
            </div>

            <div className="">
                <AddExpenseCard title="Add Expense">
                        <Button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>

                            Add Expense
                        </Button>
                </AddExpenseCard>
            </div>
        </div>
    )
}

export default Navbar