function ExpenseCard({
    expense,
    onEdit,
    onDelete
}) {

    return (

        <div className="expense-card">

            <h3>
                {expense.title}
            </h3>

            <p>
                ₹{expense.amount.toLocaleString("en-IN")}
            </p>

            <p>
                Category: {expense.category}
            </p>

            <p>
                Date: {expense.date}
            </p>

            <button
                onClick={() =>
                    onEdit(expense)
                }
            >
                Edit
            </button>

            <button
                onClick={() =>
                    onDelete(expense.id)
                }
            >
                Delete
            </button>

        </div>
    );
}

export default ExpenseCard;