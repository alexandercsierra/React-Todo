import React from 'react'
import styled from 'styled-components'

const FormDiv = styled.div`
    // border: 1px solid red;
    width: 50%;
`;

const Form = styled.form`
    // border: 1px solid red;
    display: flex;
`;

const Input = styled.input`
    padding: 1% 2%;
    width: 50%;
    border-radius: 5px;
    border: 1.5px solid dodgerblue;
`;

const Btns = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    // border: 1px solid green;
`;

const Btn = styled.button`
    border-radius: 5px;
    border: none;
    background: white;
    margin: 0 1%;
`;

const TodoForm = props => {

    return <FormDiv>
        <Form>
            <Input onChange={props.handleChange} value={props.currentTodo} placeholder="what do you want to get done?"/>
            <Btns>
                <Btn className="add" onClick={props.onSubmit}> Add Todo</Btn>
                <Btn className="clear" onClick={props.clearCompleted}>Clear Completed</Btn>
            </Btns>
            
        </Form>
    </FormDiv>
}

export default TodoForm