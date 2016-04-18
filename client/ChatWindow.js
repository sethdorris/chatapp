import React from 'react';
import Message from './Message';

class ChatWindow extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        let messagesArray = this.props.messages;
        return (
                <div className="row">
                    <div className="col-md-12 col-xs-12 chatwindow">
                        <ul className="messages">
                            {messagesArray.map((message) => {
                                return <Message content={message.content} key={message.id}/> })}
                        </ul>
                    </div>
                </div>
            )
    }
}

export default ChatWindow;