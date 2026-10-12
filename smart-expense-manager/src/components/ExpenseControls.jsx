function ExpenseControls({
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory
}) {

    return (

        <div className="expense-controls">

            <input
                type="text"
                placeholder="Search expenses..."
                value={searchTerm}
                onChange={(event) =>
                    setSearchTerm(event.target.value)
                }
            />

            <select
                value={selectedCategory}
                onChange={(event) =>
                    setSelectedCategory(event.target.value)
                }
            >

                <option value="All">
                    All Categories
                </option>

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
    );
}

export default ExpenseControls;