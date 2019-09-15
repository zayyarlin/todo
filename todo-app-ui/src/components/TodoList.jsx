import React from 'react';
import TodoItem from './TodoItem';
import { Button, Checkbox } from 'semantic-ui-react';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.data;

        this.showCompletedItems = this.showCompletedItems.bind(this);
    }

    showCompletedItems() {
        this.setState(state => ({
            showCompleted: !state.showCompleted
        }));
    }

    render() {
        let todoItems = this.state.todoItems.map((todoItem) => 
            <React.Fragment>
                <TodoItem key={todoItem.todoItemDesc} data={todoItem}/>
                <Button>Delete</Button>
            </React.Fragment>
        );

        return (
        <React.Fragment>
            <div>TodoList name: {this.state.todoListName} </div>
            <Checkbox toggle lable="Show completed items" checked={this.state.showCompleted} onClick={this.showCompletedItems}/>
            {todoItems}
        </React.Fragment>);
    }
}

export default TodoList;