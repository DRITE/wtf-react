import React, {Component} from 'react';

class ButtonAdd extends Component {

    render() {
        return (
            <div>
                <button onClick={this.addItem}/>
            </div>
        );
    }
}

export default ButtonAdd;
