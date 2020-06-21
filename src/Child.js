import React, {useContext, useState} from 'react';
import {TransContext} from './transContext';

function Child() {
    let {transactions, addTrans} = useContext(TransContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event) => {
        event.preventDefault();
        if (Number(newAmount) === 0) {
            alert("Please Enter Number Greater than Zero");
            return false;
        }
        addTrans({
            amount: Number(newAmount),
            desc: newDesc
        });

        setDesc('');
        setAmount(0);
    }

    const getIncome = () => {
        let income = 0;
        for (var i=0; i < transactions.length; i++) {
            if (transactions[i].amount > 0) {
                income += transactions[i].amount;
            }
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i=0; i < transactions.length; i++) {
            if (transactions[i].amount < 0) {
                expense += transactions[i].amount;
            }
        }
        return expense;
    }

  return (
    <div className="container">
        <h1 className="text-center">Expense Tracker</h1>
        <h2 className="text-center">By: Muhammad Waleed Khan</h2>
        <h3>Your Balance <br /> <span>{getIncome() + getExpense()} Rps</span></h3>

        <div className="expense-container">
            <h3>Income <br /> <span>{getIncome()} Rps</span></h3>
            <h3>Expense <br /> <span>{getExpense()} Rps</span></h3>
        </div>

        <div>
            <h3>History</h3><hr />
            <ul className="transaction-list">
                {transactions.map((transObj, ind) => {
                    return (
                        <li key={ind}><span>{transObj.desc}</span><span>{transObj.amount} Rps</span><span className="list-style"></span></li>
                    )
                })}
            </ul>
        </div>

        <div>
            <h3>Add New Transaction:</h3><hr />
            <form className="transaction-form" onSubmit={handleAddition}>
                <label>Add Description:</label><br />
                <input type="text" value={newDesc} placeholder="Enter Description" onChange={(ev)=>setDesc(ev.target.value)} required /><br />

                <label>Enter Amount:</label><br />(Negative - Expense, Positive - Income)<br />
                <input type="number" value={newAmount} placeholder="Enter Amount" onChange={(ev)=>setAmount(ev.target.value)} required /><br />
                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    </div>
  );
}

export default Child;
