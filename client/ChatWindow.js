﻿import React from 'react';
import Message from './Message';
import {connect} from 'react-redux';

const ChatWindow = (props) => {

    return (
        <div className="row">
            <div className="col-md-12 col-xs-12 chatwindow">
                <ul className="messages">
                      {props.messages.map((item) => {
                                              return (
                                                  <li>{item.sentby.username + " - " + item.content}</li>
                                                  )
                       })}      
                </ul>
            </div>
        </div>
    )
}

export default connect()(ChatWindow);