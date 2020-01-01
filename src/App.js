import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      currentTodo: ""
    }; //end state
  }

  handleChange = e => {
    this.setState({currentTodo: e.target.value});
    // console.log(e.target.value);
  }
  onSubmit = e => {
    e.preventDefault();
    this.setState({todos: [... this.state.todos, {
      task: this.state.currentTodo,
      id: Date.now(),
      completed: false
    }]})
  }

  render(){
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos}/>
        <TodoForm handleChange={this.handleChange} currentTodo={this.state.currentTodo} onSubmit={this.onSubmit}/>
        <p>{this.state.currentTodo}</p>
      </div>
    );
  }
  
}

export default App;
