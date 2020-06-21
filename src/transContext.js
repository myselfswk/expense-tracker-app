import React, {createContext, useReducer} from 'react';
import TransReducer from './transReducer';

const initialTransactions = [
    {amount: +500, desc: 'Cash'}
    /* ,
    {amount: -2000, desc: 'Bill'},
    {amount: +25000, desc: 'Salary'} */
]

export const TransContext = createContext(initialTransactions);

export const TransProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransReducer, initialTransactions);
    function addTrans(transObj) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            }
        })
    }
    return(
        <TransContext.Provider value={{
            transactions: state,
            addTrans
        }}>
            {children}
        </TransContext.Provider>
    )
}