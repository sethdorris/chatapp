import React from 'react';
import Menu from './Menu';
import Content from './Content';
class ChatContainer extends React.Component {
    constructor(props) {
        super();

    }

    send() {
        console.log("Fired");
    }
    
    render() {
        return (
            <div className="container dom">
                <div className="row">
                    <Menu />
                    <Content send={this.send}/>
                 </div>
            </div>
            )
    }
};
export default ChatContainer;