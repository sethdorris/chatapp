import React from 'react';
import Message from './Message';
import {connect} from 'react-redux';

const ChatWindow = (props) => {
    return (
        <div className="row">
            <div className="col-md-12 col-xs-12 chatwindow">
                <ul className="messages">
                            
                </ul>
            </div>
        </div>
    )
}

export default Connect()(ChatWindow);