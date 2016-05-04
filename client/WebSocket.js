let ws = new WebSocket("ws://localhost:3000");

const server = {
    connected: false,
    connect: function() {
        if (ws.readyState == 1) {
            this.connected = true;
        }
        return this.connected;
    },
    sendmessage: () => {
        ws.send(JSON.stringify({message: "hi"}));
    }
}

export default server;