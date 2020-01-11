import React from 'react'
// import '../../Todo.css'

const Todo = props => {
    
    return <h4 className={props.class} onClick={props.completed}>{props.task}</h4>
}

export default Todo