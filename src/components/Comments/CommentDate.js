import './CommentDate.css';

function CommentDate (props) {
    let commentDate = props.enterDate;
    let month = commentDate.toLocaleString('en-US', { month: 'long' });
    let day = commentDate.toLocaleString('en-US', {day: '2-digit'});
    let year = commentDate.getFullYear();
    let hour = commentDate.getHours();
    let minute = commentDate.getMinutes();
    let second = commentDate.getSeconds();

    return (
        <div className='expense-date'>
            <span className='comment-date__month'>{month}</span>
            <span className='comment-date__day'>{day}</span>
            <span className='comment-date__year'>{year}</span>
            <span className='comment-date__hour'>{hour+" : "}</span>
            <span className='comment-date__minute'>{minute +" : "}</span>
            <span className='comment-date__second'>{second}</span>
        </div>
    )
}
export default CommentDate;