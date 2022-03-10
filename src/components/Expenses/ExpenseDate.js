import './ExpenseDate.css';

function ExpenseDate (props) {
    let expenseDate =props.date;
    let month = expenseDate.toLocaleString('en-US', { month: 'long' });
    let day = expenseDate.toLocaleString('en-US', {day: '2-digit'});
    let year = expenseDate.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    )
}
export default ExpenseDate;