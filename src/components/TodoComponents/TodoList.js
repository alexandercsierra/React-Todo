import React from 'react'

const TodoList = props => {
return <div>
    {props.todos.map(todo => {
        return <h3>{todo.task}</h3>
    })}
</div>
}

export default TodoList