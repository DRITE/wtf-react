import React, {Component} from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpened: false};
    }

    toggleState() {
        this.setState({isOpened: !this.state.isOpened});
    }

    render(){
        console.log('IsOpened', this.state.isOpened);
        let dropDownText;
        if (this.state.isOpened) {
            dropDownText = <div>Here is shown</div>
        }
        return (<div onClick={this.toggleState.bind(this)}>
            its dropdown
            {dropDownText}
        </div>)
    }
}

export default Dropdown;
