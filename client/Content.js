import React from 'react';
import Controls from './Controls';
import ChatWindow from './ChatWindow';

class Content extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
                <div className="col-md-8 col-xs-8 text-center content">
                    <ChatWindow />
                    <Controls send={this.props.send} />
                </div>
            )
    }
}
export default Content;