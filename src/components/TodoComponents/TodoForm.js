import React from 'react'

const TodoForm = props => {
    
    return <div>
        <form>
            <input onChange={props.handleChange}/>
            <button onClick={props.onSubmit}> Add Todo</button>
            <button>Clear Completed</button>
        </form>
    </div>
}

export default TodoForm