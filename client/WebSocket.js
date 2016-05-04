let ws = new WebSocket("ws://localhost:3000");

const server = {
    connected: false,
    isConnected: function() {
        if (ws.readyState == 1) {
            this.connected = true;
        } else {
            this.connected = false;
        }
        return this.connected;
    },
    connect: function() {
        if (ws.readyState == 1) {
            this.connected = true;
        }
        return this.connected;
    },
    sendmessage: async function(text) {
        await ws.send(JSON.stringify({message: text}));
        return console.log("You sent this message: ", JSON.stringify({message: text}));
    }
}

export default server;