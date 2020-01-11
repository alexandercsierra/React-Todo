import React from 'react'
import Todo from './Todo'

const TodoList = props => {
return <div>
    {props.todos.map(todo => {
        return <Todo task={todo.task} done={todo.completed} completed={props.completed} class={todo.class} id={todo.id}/>
    })}
</div>
}

export default TodoList