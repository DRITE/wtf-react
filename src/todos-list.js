import React, {Component} from 'react';
import {connect} from 'react-redux';

export class TodosList extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         todos: []
    //     };
    // }

    deleteItem(index) {
        console.log('deleteItem');
        this.props.onDelete(index);
    }

    render() {
        console.log('Будем рендерить такие items:', this.props.todos);
        return (
            <div>
                {this.props.todos.map((item, index) =>
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

const mapStateToProps = (state) => {
    console.log('mapStateToProps:   ', state.items);
    return {todos: state.items};

};
const mapDispatchToProps = (dispatch) => ({
    onDelete: (itemIndex) => {
        dispatch({
            type: 'DELETE_ITEM',
            index: itemIndex
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);

