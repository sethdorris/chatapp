const ws = new WebSocket("ws://localhost:3000");

const server = {
    sendmessage: () => {
        return ws.onmessage = (message) => {
            return JSON.parse(message);
        }
    },
    getserver: () => {
        return ws;
    }
}

export default server;