import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    // border: 1px solid blue;
    background: white;
    border-radius: 5px;
    text-align: center;
    width: 40%;
    padding: 1% 2%;
    margin: 4%;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);

    &:hover{
        transform: scale(1.1);
    }
`;

const Todo = props => {
    
    return <Card><h4 className={props.class} onClick={props.completed} id={props.id}key={props.id}>{props.task}</h4></Card>
}

export default Todo