import React from "react"; 
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props =>{
   
    if (props.length === 0) {
        return <h2 className = "expenses-list_fallback">NO EXPENSE FOUND</h2>
    }
    
    return <ul className = "expenses-list">
           {props.items.map((el) => {
            return <ExpenseItem
                title={el.title}
                amount={el.amount}
                date={el.date}
                key ={el.id}
            />
        })}

    </ul>
}
export default ExpensesList;