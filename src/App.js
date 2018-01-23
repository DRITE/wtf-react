import React, {Component} from 'react';
import TodosList from "./todos-list";
import {connect} from 'react-redux';
import AddForm from "./add-form";


export class App extends Component {

    addItem(newTitle, newDesc){
        console.log('addItem');
        this.props.onAdd(newTitle, newDesc);
    }


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

export default connect(
    // state => ({
    //     addState: state
    // }),
    // dispatch => ({
    //     onAdd: (itemTitle, itemDesc) => {
    //         dispatch({
    //             type: 'ADD_ITEM',
    //             title: itemTitle,
    //             description: itemDesc
    //         })
    //     }
    // })


)(App);

