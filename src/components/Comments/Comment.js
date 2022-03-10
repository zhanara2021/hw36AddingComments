import React, { useState } from "react";
import './Comment.css';
import Card from '../../UI/Card';
import Form from './Form';

const initial=[
    {
    enterDate: new Date(11, 2022),
    form: "blsb sldfb fdsl d"
    }
]
function Comment() { 

    const [forms,setForms] = useState(initial);

    const addFormHandler = (form) => {
        setForms( prevForms => {
            return [form, 
              ...prevForms
            ];
      })
    }
    return (
        <Card className='expense-item'> 
            <Form class = "comment-form"  onAddForm={addFormHandler} forms={forms}/> 
        </Card>
    );
}

export default Comment;