import React from 'react';
import Controls from './Controls';
import ChatWindow from './ChatWindow';

class Content extends React.Component {
    constructor(props) {
        super();

        this.state = {
            messages: [{
                title: "test",
                content: "this is my content"
            }]
        }
    }

    send () {
        console.log("Firing");
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