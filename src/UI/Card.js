import './Card.css';

//Обертка либо контейнер
//Component Layout

function Card(props) {
    let classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;