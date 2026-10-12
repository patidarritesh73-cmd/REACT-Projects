import DashboardCard from "./DashboardCard";
import CategorySummary from "./categorySummary";

function Dashboard({
    totalExpense,
    expenses,
    highestExpense,
    averageExpense,
    lowestExpense,
    categoryTotals
}) {

    return (

        <section className="section">

            <h2>Dashboard</h2>

            <div className="dashboard-grid">

                <DashboardCard
                    title="Total Expense"
                    value={`₹${totalExpense.toLocaleString("en-IN")}`}
                />

                <DashboardCard
                    title="Total Transactions"
                    value={expenses.length}
                />

                <DashboardCard
                    title="Highest Expense"
                    value={`₹${highestExpense.toLocaleString("en-IN")}`}
                />

                <DashboardCard
                    title="Average Expense"
                    value={`₹${averageExpense.toLocaleString(
                        "en-IN",
                        {
                            maximumFractionDigits: 2
                        }
                    )}`}
                />

                <DashboardCard
                    title="Minimum Expense"
                    value={`₹${lowestExpense.toLocaleString("en-IN")}`}
                />

            </div>

            <CategorySummary
                categoryTotals={categoryTotals}
            />

        </section>
    );
}

export default Dashboard;