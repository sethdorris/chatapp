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
        //Grab chat rooms from db and set them in state, pass to Menu
    }

    send() {
        const message = document.getElementById('message');
        const {dispatch} = this.props;
        dispatch(sendMessage(message));
    }
    
    render() {
        const {username} = this.props;
        console.log("Username", username);
        return (
            <div className="container dom">
                <div className="row flexcontainer">
                    <Menu username={username}/>
                    <Content username={username} send={this.send}/>
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

    }
}

export default connect(mapStateToProps)(ChatContainer);