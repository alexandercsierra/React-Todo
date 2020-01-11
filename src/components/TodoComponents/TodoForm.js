import React from 'react'

const TodoForm = props => {

    return <div>
        <form>
            <input onChange={props.handleChange} value={props.currentTodo}/>
            <button onClick={props.onSubmit}> Add Todo</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    </div>
}

export default TodoForm