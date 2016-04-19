import React from 'react';
import Controls from './Controls';
import ChatWindow from './ChatWindow';

/*
    const ws = new WebSocket("ws://localhost:3000");
        ws.onopen = () => {
            ws.send("hi");
            ws.onmessage = (message) => {
                console.log("message: ", message.data);
            }
        }
        */


class Content extends React.Component {
    constructor(props) {
        super();

        this.state = {
            messages: [{
                id: 0,
                content: "this is my content"
            }, {
                id: 1,
                content: "I am just testing my second content item."
            }]
        }
    }

    send () {

    }

    componentDidMount() {
    
    }

    render() {
        return (
                <div className="col-md-8 col-xs-8 text-center content">
                    <ChatWindow messages={this.state.messages}/>
                    <Controls send={this.send}/>
                </div>
            )
    }
}
export default Content;