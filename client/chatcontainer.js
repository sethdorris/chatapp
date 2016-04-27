import React from 'react';
import Menu from './Menu';
import Content from './Content';
import Message from './Message';
import {connect} from 'react-redux';

class ChatContainer extends React.Component {
    constructor(props) {
        super();

    }

    componentDidMount() {
        //Grab chat rooms from db and set them in state, pass to Menu
    }
    
    render() {
        return (
            <div className="container dom">
                <div className="row flexcontainer">
                    <Menu />
                    <Content />
                 </div>
            </div>
            )
    }
};
export default connect(state=>state)(ChatContainer);