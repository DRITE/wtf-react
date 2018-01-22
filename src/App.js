import React, {Component} from 'react';
import TodosList from "./todos-list";
import {connect} from 'react-redux';


class App extends Component {

    deleteItem(index) {
        console.log('deleteItem');
        this.props.onDelete(index);
    }

    render() {
        console.log('In App. this.props.testStore', this.props.testStore);
        return (
            <div>
                {/*<TodosList />*/}
                {this.props.testStore.items.map((item, index) =>
                <div key={index}>
                    <h4>
                        {item.title}
                    </h4>
                    <div>
                        {item.description}
                    </div>
                    <button type="submit" onClick={this.deleteItem.bind(this, index)}>Delete</button>
                </div>
                )}
            </div>
        );
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onDelete: (itemIndex) => {
            dispatch({
                type: 'DELETE_ITEM',
                index: itemIndex
            })
        }
    })
)(App);
