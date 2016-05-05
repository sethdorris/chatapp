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
    sendmessage: async function(object) {
        await ws.send(JSON.stringify(object));
        return console.log("You sent this message: ", object);
    },
    getserver: function() {
        return ws;
    }
}

export default server;