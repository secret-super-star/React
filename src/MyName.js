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

export default MyName;