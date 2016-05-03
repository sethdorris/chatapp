import React from 'react';
import Menu from './Menu';
import Content from './Content';
import Message from './Message';
import {connect} from 'react-redux';
const PropTypes = React.PropTypes;
import {sendMessage} from './actions/index';

class ChatContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.send = this.send.bind(this);
    }

    componentDidMount() {
       
    }

    send() {
        const message = document.getElementById('message');
        const {dispatch, server} = this.props;
        console.log(server)
        console.log(dispatch)
        dispatch(sendMessage(message.value));
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