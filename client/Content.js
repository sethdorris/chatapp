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

    }

    send () {

    }

    componentDidMount() {
    
    }

    render() {
        return (
                <div className="col-md-8 col-xs-8 text-center content">
                    <ChatWindow username={this.props.username}/>
                    <Controls />
                </div>
            )
    }
}
export default Content;