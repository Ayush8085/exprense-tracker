import { ExpenseCard } from "@/components/ExpenseCard";


const Home = () => {
  return (
    <div className="min-h-[90%]">
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