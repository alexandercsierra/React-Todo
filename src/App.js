import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import banner from './components/imgs/banner.jpg'
import './Todo.css'
import styled from 'styled-components'

const Banner = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-position: 50% 25%;
  width: 100%;
  height: 45vh;
`;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false,
          class: "incomplete"
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false,
          class: "incomplete"
        }
      ],
      currentTodo: "",
      // doneTodo: ""
    }; //end state
  }

  componentDidMount = () => {
    let localData = JSON.parse(localStorage.getItem('todoState'));
    console.log(localData);
    this.setState(localData);
  }

  handleChange = e => {
    this.setState({...this.state, currentTodo: e.target.value});
  }

  onSubmit = e => {
    e.preventDefault();
    if (this.state.currentTodo !== ""){
      this.setState({todos: [... this.state.todos, {
        task: this.state.currentTodo,
        id: Date.now(),
        completed: false,
        class: "incomplete"
        }],
        currentTodo: ""
      })

      let currentState = {todos: [... this.state.todos, {
        task: this.state.currentTodo,
        id: Date.now(),
        completed: false,
        class: "incomplete"
        }],
        currentTodo: ""
      }
      localStorage.setItem('todoState', JSON.stringify(currentState));
    }
  }

  //toggles the css class depending upon whether a particular task has been clicked or not by duplicating state, changing it, then setting the altered state as the new state
  completed = e => {

    let clicked = this.state.todos.filter(todo => todo.id === Number(e.target.id));
    // console.log(e.target.id);
    clicked[0].completed = !clicked[0].completed;
    if (clicked[0].completed === true){
      clicked[0].class="complete";
      let index = this.state.todos.indexOf(clicked[0]);
      console.log(index);
      let newState = this.state.todos;
      newState[index] = clicked[0];
      this.setState({todos: newState});
    } else {
      clicked[0].class="incomplete";
      let index = this.state.todos.indexOf(clicked[0]);
      console.log(index);
      let newState = this.state.todos;
      newState[index] = clicked[0];
      this.setState({todos: newState});

    }
    

  }

  //creates a variable to filter out all the tasks that have completed set to true then set the new state to that variable
  clearCompleted = e => {
    e.preventDefault();
    let incompleteTasks = this.state.todos.filter(todo => todo.completed === false);
    // console.log(incompleteTasks);
    this.setState({todos: incompleteTasks});
    localStorage.setItem('todoState', JSON.stringify({todos: incompleteTasks}));

  }




  render(){
    return (
      <div className="Todo">
        <Banner></Banner>
        <h2>Yet Another Todo App</h2>
        
        <TodoForm handleChange={this.handleChange} currentTodo={this.state.currentTodo} onSubmit={this.onSubmit} clearCompleted={this.clearCompleted} currentState={this.state}/>
        <TodoList todos={this.state.todos} completed={this.completed}/>
        {/* <p>{this.state.currentTodo}</p> */}
        {/* <p>{this.state.doneTodo.task}</p> */}
      </div>
    );
  }
  
}

export default App;
