import React from 'react';
import Menu from './Menu';
import Content from './Content';
class ChatContainer extends React.Component {
    render() {
        return (
            <div className="container">
                <Menu />
                <Content />
            </div>
            )
    }
};
export default ChatContainer;