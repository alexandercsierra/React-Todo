import React from 'react'

const Todo = props => {
    return <h4 onClick={props.completed}>{props.task}</h4>
}

export default Todo