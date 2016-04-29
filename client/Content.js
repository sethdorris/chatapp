import React from 'react';
import Controls from './Controls';
import ChatWindow from './ChatWindow';

const Content = (props) => {
    return (
            <div className="col-md-8 col-xs-8 text-center content">
                <ChatWindow username={this.props.username}/>
                <Controls />
            </div>
        )
}
export default Content;