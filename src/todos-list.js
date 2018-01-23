import React, {Component} from 'react';
import {connect} from 'react-redux';

export class TodosList extends Component {

    deleteItem(index) {
        console.log('deleteItem');
        this.props.onDelete(index);
    }

    render() {
        console.log('items', this.props.todos.items);
        return (
            <div>
                {this.props.todos.items.map((item, index) =>
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

const mapStateToProps = (state) => ({todos: state});
const mapDispatchToProps = (dispatch) => ({
    onDelete: (itemIndex) => {
        dispatch({
            type: 'DELETE_ITEM',
            index: itemIndex
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);

