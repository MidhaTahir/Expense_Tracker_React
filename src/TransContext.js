import React,{ createContext, useReducer } from 'react';
import TransReducer from './TransReducer';

let transactions = [
    {id:0 ,amount:0, category:'cash'},
    {id:1 ,amount:-440, category:'cash'},
    {id:2 ,amount:441, category:'cash'}
];

export const TransContext = createContext(transactions);

export const TransactionProvider = ({children})=>{
    let [state, dispatch] = useReducer(TransReducer,transactions);

    function addTransaction(transaction){
        dispatch({
            type: "PLUS",
            payload : {
                amount: transaction.amount,
                category:transaction.category
            }
        })
    }

    function removeTransaction(id){
        dispatch({
            type: "MINUS",
            payload: id,
        });
    }


    return(
        <TransContext.Provider value={{
            transactions: state,
            addTransaction,
            removeTransaction
        }
        }>
            {children}
        </TransContext.Provider>
    )
}