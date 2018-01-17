import React, {Component} from 'react';
import TodosList from "./todos-list";

const todos = [
    {
        title: "TODO1",
        description: "Description of todo1"
    },
    {
        title: "TODO2",
        description: "Description of todo2"
    },
    {
        title: "TODO3",
        description: "Description of todo3"
    }
];

class App extends Component {

    render() {
        return (
            <div>
                <TodosList items={todos}/>
            </div>
        );
    }
}

export default App;
