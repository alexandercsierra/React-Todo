import React from 'react'
import Todo from './Todo'
import styled from 'styled-components'

const TodoDiv = styled.div`
    // border: 1px solid yellow;
    width: 50%;
    margin: 4%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const TodoList = props => {
    let newArr = props.todos.map(todo => {
            return <Todo task={todo.task} done={todo.completed} completed={props.completed} class={todo.class} id={todo.id}/>
        })
    return <TodoDiv>
        {/* {props.todos.map(todo => {
            return <Todo task={todo.task} done={todo.completed} completed={props.completed} class={todo.class} id={todo.id}/>
        })} */}
        {newArr.reverse()}
    </TodoDiv>
}

export default TodoList