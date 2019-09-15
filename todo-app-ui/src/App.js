import React from 'react';
import TodoList from './components/TodoList';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = props.data;
  }

  componentDidMount() {

  }
  
  render() {
    let todos = this.state.todos.map((todolist) => <TodoList key={todolist.todoListName} data={todolist}/>);
    return todos;
  }
}

export default App;