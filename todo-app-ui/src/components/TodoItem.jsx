import React from 'react';
import { Checkbox, Label } from 'semantic-ui-react'

class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.data;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            completed: !state.completed
        }));
    }

    render() {
        return (
            <div className={"to-do-item " + (this.state.completed ? "completed" : "")}>
                <Checkbox label={this.state.todoItemDesc}
                        checked={this.state.completed} 
                        onClick={this.handleClick} />
            </div>
        );
    }
}

export default TodoItem;