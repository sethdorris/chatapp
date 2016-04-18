import React from 'react';

class Message extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
                <li>{this.props.content}</li>
            )
    }
}

export default Message;