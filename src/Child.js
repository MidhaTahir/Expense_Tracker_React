import React from 'react';
import  {useContext, useState } from 'react';
import { TransContext } from './TransContext';

export const Child = () => {
    let {transactions,addTransaction,removeTransaction} = useContext(TransContext);
    let [newCategory,setCategory] = useState("");
    let [newAmount,setAmount] = useState(0);


    const handleAddition = (event) => {
        event.preventDefault();
        addTransaction({
            amount: Number(newAmount),
            category : newCategory
        });
        setCategory('');
        setAmount(0);
    }

    const getIncome = () => {
        let income = 0;
        for(var i=0;i<transactions.length;i++){
            if(transactions[i].amount > 0)
              income += transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for(var i=0;i<transactions.length;i++){
            if(transactions[i].amount < 0)
               expense += transactions[i].amount;
        }
        return expense;
    }

    return (
        <div className="container">
        
            <h1>Expense Tracker
                <span role="img" aria-label="Money Bag">💰</span></h1><hr />
            <h2>Your Balance: ${getIncome()+getExpense()} </h2>

            <div className="display">
                <h2 className="plus">
                <span role="img" aria-label="Money-Mouth Face">🤑</span>
                Income <br /> ${getIncome()}  </h2>
                <h2 className="minus">
                <span role="img" aria-label="Cross Mark">❌</span>
                Expense <br /> ${getExpense()} </h2>
            </div>

            <h3>History</h3>
            <hr/>

            <ul className="transaction-lists">
                {transactions.map((transaction,ind) => {
                    return(<li key={ind}>
                        <span>{transaction.category}</span>
                        <span>{transaction.amount}</span>
                        <button className="delete-btn"
                        onClick={() => removeTransaction(transaction.id)}>X</button>
                    </li>)
                })}
            </ul>

            <h3>Add new transaction</h3><hr />

            <form className="transaction-form" onSubmit={handleAddition}>

                <label>
                    <input type="text" placeholder="Enter Expense" value={newCategory} onChange={(ev)=>setCategory(ev.target.value)} required />
                </label>
                <br />
                <label>
                    <input type="number" placeholder="Enter Amount" value={newAmount} onChange={(ev)=>setAmount(ev.target.value)} required />
                </label>

                <button className="btn">Add transaction</button>

            </form>
            <h3><a href="https://github.com/MidhaTahir" target="blank" >Made by Midha</a>
            <span role="img" aria-label="Heart">❤️</span>
            </h3>
        </div>

    )
}
