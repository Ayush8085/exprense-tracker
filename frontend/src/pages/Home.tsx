import { ExpenseCard } from "@/components/ExpenseCard";
import { Input } from "@/components/ui/input";


const Home = () => {
  return (
    <div className="min-h-[90%]">
      {/* SEARCH EXPENSE */}
      <div className="flex items-center p-4 max-w-[320px]">
        <Input type="text" placeholder="Filter by 'title', 'price', 'type'..." />
      </div>

      {/* SHOW ALL THE EXPENSES HERE */}
      <div className="flex flex-col flex-wrap sm:flex-row p-4 gap-4">
        {/* One expense */}
        <ExpenseCard />

        {/* One expense */}
        <ExpenseCard />

        {/* One expense */}
        <ExpenseCard />

        {/* One expense */}
        <ExpenseCard />

        {/* One expense */}
        <ExpenseCard />

        {/* One expense */}
        <ExpenseCard />

      </div>
    </div>
  )
}

export default Home;