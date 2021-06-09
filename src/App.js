import React, { useState } from 'react';
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
    {
        id: "e1",
        title: "Cat food",
        amount: 550,
        date: new Date(2021, 5, 12)
    },
    {
        id: "e2",
        title: "Cat toys",
        amount: 14,
        date: new Date(2020, 8, 28)
    },
    {
        id: "e3",
        title: "Drugs",
        amount: 146,
        date: new Date(2020, 5, 27)
    },
    {
        id: "e4",
        title: "Flowers",
        amount: 88,
        date: new Date(2020, 4, 20)
    },
    {
        id: "e5",
        title: "Books",
        amount: 150,
        date: new Date(2020, 1, 20)
    }
];


const App = () => {

    const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

    const addExpenseHandler = expense => {
        setExpenses((prevExpenses) => {
            return [expense, ...expenses];
        });
    };

    return (
        <div className="wrapper">
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}


export default App;
