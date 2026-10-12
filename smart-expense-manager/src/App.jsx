import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";


function App() {

    // =========================
    // EXPENSE STATE
    // =========================

    const [expenses, setExpenses] = useState(() => {

        const savedExpenses =
            localStorage.getItem("expenses");

        return savedExpenses
            ? JSON.parse(savedExpenses)
            : [
                {
                    id: 1,
                    title: "Food",
                    amount: 500,
                    category: "Food",
                    date: "2026-09-25"
                },
                {
                    id: 2,
                    title: "Travel",
                    amount: 1200,
                    category: "Travel",
                    date: "2026-09-24"
                },
                {
                    id: 3,
                    title: "Shopping",
                    amount: 2500,
                    category: "Shopping",
                    date: "2026-09-23"
                }
            ];
    });


    // =========================
    // FORM STATE
    // =========================

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Food");
    const [date, setDate] = useState("");


    // =========================
    // EDIT STATE
    // =========================

    const [editingExpense, setEditingExpense] =
        useState(null);


    // =========================
    // SEARCH + FILTER STATE
    // =========================

    const [searchTerm, setSearchTerm] =
        useState("");

    const [selectedCategory, setSelectedCategory] =
        useState("All");


    // =========================
    // LOCAL STORAGE
    // =========================

    useEffect(() => {

        localStorage.setItem(
            "expenses",
            JSON.stringify(expenses)
        );

    }, [expenses]);


    // =========================
    // TOTAL EXPENSE
    // =========================

    const totalExpense = expenses.reduce(
        (total, expense) =>
            total + expense.amount,
        0
    );


    // =========================
    // HIGHEST EXPENSE
    // =========================

    const highestExpense = expenses.reduce(
        (highest, expense) =>
            expense.amount > highest
                ? expense.amount
                : highest,
        0
    );


    // =========================
    // AVERAGE EXPENSE
    // =========================

    const averageExpense =
        expenses.length > 0
            ? totalExpense / expenses.length
            : 0;


    // =========================
    // MINIMUM EXPENSE
    // =========================

    const lowestExpense =
        expenses.length > 0
            ? expenses.reduce(
                (lowest, expense) =>
                    expense.amount < lowest
                        ? expense.amount
                        : lowest,
                Infinity
            )
            : 0;


    // =========================
    // CATEGORY TOTALS
    // =========================

    const categoryTotals = expenses.reduce(
        (totals, expense) => {

            if (totals[expense.category]) {

                totals[expense.category] +=
                    expense.amount;

            } else {

                totals[expense.category] =
                    expense.amount;

            }

            return totals;

        },
        {}
    );


    // =========================
    // SEARCH + FILTER
    // =========================

    const filteredExpenses =
        expenses.filter((expense) => {

            const matchesSearch =
                expense.title
                    .toLowerCase()
                    .includes(
                        searchTerm.toLowerCase()
                    );

            const matchesCategory =
                selectedCategory === "All" ||
                expense.category ===
                    selectedCategory;

            return (
                matchesSearch &&
                matchesCategory
            );
        });


    // =========================
    // ADD / EDIT
    // =========================

    const handleSubmit = (event) => {

        event.preventDefault();


        // EDIT

        if (editingExpense) {

            const updatedExpenses =
                expenses.map((expense) => {

                    if (
                        expense.id ===
                        editingExpense.id
                    ) {

                        return {
                            ...expense,
                            title,
                            amount: Number(amount),
                            category,
                            date
                        };
                    }

                    return expense;
                });

            setExpenses(updatedExpenses);

            setEditingExpense(null);

        }

        // ADD

        else {

            const newExpense = {

                id: Date.now(),

                title,

                amount: Number(amount),

                category,

                date
            };

            setExpenses([
                ...expenses,
                newExpense
            ]);
        }


        // RESET

        setTitle("");
        setAmount("");
        setCategory("Food");
        setDate("");
    };


    // =========================
    // EDIT
    // =========================

    const handleEdit = (expense) => {

        setEditingExpense(expense);

        setTitle(expense.title);

        setAmount(expense.amount);

        setCategory(expense.category);

        setDate(expense.date);
    };


    // =========================
    // DELETE
    // =========================

    const handleDelete = (id) => {

        const updatedExpenses =
            expenses.filter(
                (expense) =>
                    expense.id !== id
            );

        setExpenses(updatedExpenses);
    };


    // =========================
    // UI
    // =========================

    return (
        <>

            <Header />


            <main className="container">

                <Dashboard
                    totalExpense={totalExpense}
                    expenses={expenses}
                    highestExpense={highestExpense}
                    averageExpense={averageExpense}
                    lowestExpense={lowestExpense}
                    categoryTotals={categoryTotals}
                />


                <ExpenseForm
                    title={title}
                    amount={amount}
                    category={category}
                    date={date}
                    setTitle={setTitle}
                    setAmount={setAmount}
                    setCategory={setCategory}
                    setDate={setDate}
                    handleSubmit={handleSubmit}
                    editingExpense={editingExpense}
                />


                <ExpenseList
                    filteredExpenses={filteredExpenses}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={
                        setSelectedCategory
                    }
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />

            </main>


            <footer className="footer">

                <p>
                    Smart Expense Manager © 2026
                </p>

            </footer>

        </>
    );
}

export default App;