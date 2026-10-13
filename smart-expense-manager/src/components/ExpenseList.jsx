import ExpenseControls from "./ExpenseControls";
import ExpenseCard from "./ExpenseCard";

function ExpenseList({
    filteredExpenses,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    handleEdit,
    handleDelete
}) {

    return (

        <section className="section">

            <h2>
                My Expenses
            </h2>

            <ExpenseControls
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedCategory={selectedCategory}
                setSelectedCategory={
                    setSelectedCategory
                }
            />

            <div className="expense-list">

                {filteredExpenses.length === 0 ? (

                    <p>
                        No expenses found.
                    </p>

                ) : (

                    filteredExpenses.map(
                        (expense) => (

                            <ExpenseCard
                                key={expense.id}
                                expense={expense}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />

                        )
                    )

                )}

            </div>

        </section>
    );
}

export default ExpenseList;