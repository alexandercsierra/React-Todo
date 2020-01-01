import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
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
      completed: false
    }]})
  }

  completed = e => {
    console.log("from completed");
    console.log(e.target.textContent);
    let clicked = this.state.todos.filter(todo => todo.task === e.target.textContent);
    console.log(clicked);
  }

//   const onSubmit = (e) =>{
//     e.preventDefault();
//     // setTeam(oldTeam => [...oldTeam, newMember]);
//     if (isEdit){
//         //search through team array
//         // console.log(memberToEdit);
//         let newArr = [...team];
//         let person = newArr.find(person => person.email === memberToEdit.email && person.name === memberToEdit.name && person.role === memberToEdit.role);
//         let index = newArr.indexOf(person);
//         console.log(index);
//         newArr[index] = newMember;
//         setTeam(newArr);
//         console.log("This is newArr", newArr);
//         console.log("setNewMember", setNewMember);
//         console.log(team);

//         //find team member equal to memberToEdit
//         //replace old team member with memberToEdit
//         console.log("editing");
//         setIsEdit(false);
//     } else {
//     setTeam([...team, newMember]);
//     // console.log(team);
//     setNewMember({
//         name: "",
//         email: "",
//         role: "",
//     })}
// }

  render(){
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} completed={this.completed}/>
        <TodoForm handleChange={this.handleChange} currentTodo={this.state.currentTodo} onSubmit={this.onSubmit}/>
        <p>{this.state.currentTodo}</p>
        <p>{this.state.doneTodo.task}</p>
      </div>
    );
  }
  
}

export default App;
