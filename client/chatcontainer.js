import React from 'react';
import Menu from './Menu';
import Content from './Content';
import Message from './Message';
class ChatContainer extends React.Component {
    constructor(props) {
        super();

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
export default ChatContainer;