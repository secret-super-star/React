import React, { Component } from 'react';

class MyName extends Component {
    render() {
        return (
            <div>
                Hello. My name is <b>{this.props.name}</b>.
            </div>
        )
    }
}

MyName.defaultProps = {
    name : "Default name"
}

export default MyName;