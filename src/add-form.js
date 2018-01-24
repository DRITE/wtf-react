import React, {Component} from 'react';
import {connect} from 'react-redux';


class AddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            localTitle: '',
            localDesc: ''
        };

        this.addItem = this.addItem.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
    }

    addItem(e) {
        e.preventDefault();
        console.log('addItem. получены значения: ', {title: this.state.localTitle, desc: this.state.localDesc});
        this.props.onAdd(this.state.localTitle, this.state.localDesc);

    }
    handleChangeTitle(event) {
        this.setState({localTitle: event.target.value});
    }

    handleChangeDesc(event) {
        this.setState({localDesc: event.target.value});
    }


    render() {
        return (
            <div>
                <form onSubmit={this.addItem}>
                    <label>
                        Title:
                        <input type="text" value={this.state.title} onChange={this.handleChangeTitle} />
                    </label>
                    <br/>
                    <label>
                        Description:
                        <input type="text" value={this.state.description} onChange={this.handleChangeDesc} />
                    </label>
                    <input type="submit" value="Add" />
                    <hr/>
                </form>
            </div>
        );
    }
}

export default connect(
    0,
    dispatch => ({
        onAdd: (itemTitle, itemDesc) => {
            dispatch({
                type: 'ADD_ITEM',
                title: itemTitle,
                description: itemDesc
            })
        }
    })
)(AddForm);
