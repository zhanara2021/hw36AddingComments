import React, {useState} from 'react'
import ExpensesList from './ExpensesList'
import './Expenses.css'
import Card from '../../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './Chart/ExpensesChart'

function Expenses (props) {
    const [filteredYear, setFilteredYear] = useState("2021");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
}

    const filteredExpenses = props.expenses.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected = {filteredYear}  onChangeFilter = {filterChangeHandler}/>
            <ExpensesChart items = {filteredExpenses}/>
            <ExpensesList items = {filteredExpenses}/>
        </Card>
    )
}

export default Expenses;