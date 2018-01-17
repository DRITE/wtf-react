import React, {Component} from 'react';

export class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        };
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(index) {
        this.setState(this.state.items.splice(index, 1));
    }

    render() {
        console.log('items', this.state.items);
        return (
            <div>
                {this.state.items.map((item, index) =>
                    <div key={index}>
                        <h4>
                            {item.title}
                        </h4>
                        <div>
                            {item.description}
                        </div>
                        <button type="submit" onClick={this.deleteItem}>Delete</button>
                    </div>
                )}
            </div>


        );
    }
}

export default TodosList;

