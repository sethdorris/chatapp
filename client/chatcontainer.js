﻿import React, {PropTypes} from 'react';
import Menu from './Menu';
import Content from './Content';
import Message from './Message';
import {connect} from 'react-redux';
import {sendMessage} from './actions/index';
import ws from './WebSocket';

class ChatContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.send = this.send.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        let server = ws.getserver();
        server.onmessage = (message) => {
            let parsedAction = JSON.parse(message.data);
            console.log(parsedAction);
            dispatch(parsedAction);
        }
    }

    async send() {
        const message = document.getElementById('message').value;
        if (ws.isConnected) {
            await ws.sendmessage(message);
        }
        const {dispatch} = this.props;
    }
    
    render() {
        const {username} = this.props;
        console.log("Username", username);
        return (
            <div className="container dom">
                <div className="row flexcontainer">
                    <Menu username={username}/>
                    <Content username={username} send={this.send} message/>
                 </div>
            </div>
        )
    }
};

ChatContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        messages: state.messages
    }
}

export default connect(mapStateToProps)(ChatContainer);