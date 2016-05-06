import React, {PropTypes} from 'react';
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
        const {username} = this.props;
        const message = document.getElementById('message').value;
        let messageobject = {
            type: "SEND_MESSAGE",
            content: message,
            sentby: {username}
        }
        if (ws.isConnected) {
            await ws.sendmessage(messageobject);
        }
        document.getElementById('message').value = "";
    }
    
    render() {
        const {username} = this.props;
        const {messages} = this.props;
        const {users} = this.props;
        return (
            <div className="container dom">
                <div className="row flexcontainer">
                    <Menu username={username} users={users}/>
                    <Content username={username} send={this.send} messages={messages} users={users}/>
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
        messages: state.messages,
        users: state.users
    }
}

export default connect(mapStateToProps)(ChatContainer);