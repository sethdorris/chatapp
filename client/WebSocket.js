const server = {
    connected: false,
    server: null,
    connect: () => {
        if (this.server !== null) {
            this.server = new WebSocket("ws://localhost:3000");
            this.server.onopen = () => {
                this.connected = true
            }
        }
    },
    sendmessage: () => {
        this.connect();
        this.server.send(JSON.stringify({message: "hi"}));
    },
    getserver: () => {
        return server;
    }
}

export default server;