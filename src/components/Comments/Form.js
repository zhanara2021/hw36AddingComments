import './Form.css';
import React, { useState } from "react";

function Form(props) {
    const [enteredValue, setValue] = useState('');
    const [enteredDate, setDate] = useState('');

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }
    const formChangeHandler = (event) => {
        setValue(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        let expenseForm = {
            form: enteredValue,
            enterDate: new Date(enteredDate),
        
            setValue: '',
            setDate: '',
        } 
        

        console.log(expenseForm)  
    }
    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Write your comment here</label>
                <input
                    id="title"
                    type="text"
                    value={enteredValue}
                    onChange={formChangeHandler}
                />
            </div>
           
            <div className="new-expense__control">
                <label>Comment Date</label>
                <input
                    type="date"
                    value={enteredDate}
                    onChange={dateChangeHandler}
                />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add Expense Comment</button>
        </div>
        <div>{props.forms}</div>
    </form>
    )
}

export default Form;


    