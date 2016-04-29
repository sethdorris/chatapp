import React from 'react';
import Message from './Message';

class ChatWindow extends React.Component {
    constructor(props) {
        super();
    }

    render() {

        return (
                <div className="row">
                    <div className="col-md-12 col-xs-12 chatwindow">
                        <ul className="messages">
                            
                        </ul>
                    </div>
                </div>
            )
    }
}

export default ChatWindow;