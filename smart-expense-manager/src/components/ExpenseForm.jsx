function ExpenseForm({
    title,
    amount,
    category,
    date,
    setTitle,
    setAmount,
    setCategory,
    setDate,
    handleSubmit,
    editingExpense
}) {

    return (

        <section className="section">

            <h2>
                {editingExpense
                    ? "Edit Expense"
                    : "Add Expense"}
            </h2>

            <form
                onSubmit={handleSubmit}
                className="expense-form"
            >

                <div>

                    <label>
                        Expense Title
                    </label>

                    <input
                        type="text"
                        placeholder="Enter expense title"
                        value={title}
                        onChange={(event) =>
                            setTitle(event.target.value)
                        }
                        required
                    />

                </div>


                <div>

                    <label>
                        Amount
                    </label>

                    <input
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(event) =>
                            setAmount(event.target.value)
                        }
                        required
                    />

                </div>


                <div>

                    <label>
                        Category
                    </label>

                    <select
                        value={category}
                        onChange={(event) =>
                            setCategory(event.target.value)
                        }
                    >

                        <option value="Food">
                            Food
                        </option>

                        <option value="Travel">
                            Travel
                        </option>

                        <option value="Shopping">
                            Shopping
                        </option>

                        <option value="Bills">
                            Bills
                        </option>

                        <option value="Entertainment">
                            Entertainment
                        </option>

                        <option value="Other">
                            Other
                        </option>

                    </select>

                </div>


                <div>

                    <label>
                        Date
                    </label>

                    <input
                        type="date"
                        value={date}
                        onChange={(event) =>
                            setDate(event.target.value)
                        }
                        required
                    />

                </div>


                <button type="submit">

                    {editingExpense
                        ? "Save Changes"
                        : "Add Expense"}

                </button>

            </form>

        </section>
    );
}

export default ExpenseForm;