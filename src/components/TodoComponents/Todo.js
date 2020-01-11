import React from 'react'
// import '../../Todo.css'

const Todo = props => {
    
    return <h4 className={props.class} onClick={props.completed} id={props.id}key={props.id}>{props.task}</h4>
}

export default Todo