import React, {Component} from 'react';
import TodosList from "./todos-list";
import {connect} from 'react-redux';
import AddForm from "./add-form";


export class App extends Component {

    render() {
        console.log('In App. this.props.todos', this.props.todos);
        return (
            <div>
                <AddForm />
                <TodosList />
            </div>
        );
    }
}
/////////////////lodash

