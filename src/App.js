import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './Todo.css'

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
      doneTodo: ""
    }; //end state
  }

  handleChange = e => {
    this.setState({currentTodo: e.target.value});
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({todos: [... this.state.todos, {
      task: this.state.currentTodo,
      id: Date.now(),
      completed: false,
      class: "incomplete"
    }]})
  }

  completed = e => {
    let clicked = this.state.todos.filter(todo => todo.task === e.target.textContent);
    clicked[0].completed = !clicked[0].completed;
    if (clicked[0].completed === true){
      //copy current state to new variable
      clicked[0].class="complete";
      let index = this.state.todos.indexOf(clicked[0]);
      console.log(index);
      let newState = this.state.todos;
      newState[index] = clicked[0];
      this.setState(newState);
      



    } else {
      clicked[0].class="incomplete";
      let index = this.state.todos.indexOf(clicked[0]);
      console.log(index);
      let newState = this.state.todos;
      newState[index] = clicked[0];
      this.setState(newState);
    }
  }




  render(){
    return (
      <div className="Todo">
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} completed={this.completed} class={this.class}/>
        <TodoForm handleChange={this.handleChange} currentTodo={this.state.currentTodo} onSubmit={this.onSubmit}/>
        <p>{this.state.currentTodo}</p>
        <p>{this.state.doneTodo.task}</p>
      </div>
    );
  }
  
}

export default App;
