function CategorySummary({ categoryTotals }) {

    return (
        <div className="category-summary">

            <h3>Category Summary</h3>

            {Object.entries(categoryTotals).map(
                ([category, amount]) => (

                    <div
                        className="category-row"
                        key={category}
                    >

                        <span>{category}</span>

                        <strong>
                            ₹{amount.toLocaleString("en-IN")}
                        </strong>

                    </div>

                )
            )}

        </div>
    );
}

export default CategorySummary;