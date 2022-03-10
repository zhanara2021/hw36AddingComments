import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Comment from '../Comments/Comment';
import Card from '../../UI/Card';
import React from "react";


function ExpenseItem(props) {
    const expenseDate = props.date;
    const expenseAmount = props.amount;
    const expenseTitle= props.title; 

    return (
        <Card className='expense-item'>
            <ExpenseDate date = {expenseDate}/>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
            <Comment/>
        </Card>
    );
}

export default ExpenseItem;