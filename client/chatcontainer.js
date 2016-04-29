import React from 'react';
import Menu from './Menu';
import Content from './Content';
import Message from './Message';
import {connect} from 'react-redux';
const PropTypes = React.PropTypes;

class ChatContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    componentDidMount() {
        //Grab chat rooms from db and set them in state, pass to Menu
    }
    
    render() {
        const {username} = this.props;
        console.log("Username", username);
        return (
            <div className="container dom">
                <div className="row flexcontainer">
                    <Menu username={username}/>
                    <Content username={username}/>
                 </div>
            </div>
        )
    }
};

ChatContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        username: state.username
    }
}
export default connect(mapStateToProps)(ChatContainer);