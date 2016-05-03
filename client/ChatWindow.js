import React from 'react';
import Message from './Message';
import {connect} from 'react-redux';

const ChatWindow = (props) => {
    const {message} = props;

    return (
        <div className="row">
            <div className="col-md-12 col-xs-12 chatwindow">
                <ul className="messages">
                      {props.message.map((item) => {
                                              return (
                                                  <li>{item}</li>
                                                  )
                       })}      
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        message: state.messages
    }
}

export default connect(mapStateToProps)(ChatWindow);