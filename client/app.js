import React from 'react';
import ReactDOM from 'react-dom';
import ChatContainer from './chatcontainer';
const ws = new WebSocket('ws://localhost:3000');
ws.onopen = () => {
    ws.send("Thanks!");
}

ws.onmessage = (event) => {
    console.log(event);
}

ReactDOM.render(<ChatContainer />, document.getElementById('app'));