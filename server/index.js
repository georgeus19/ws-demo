import { WebSocketServer } from 'ws';


const wss = new WebSocketServer({ port: 5000 });
console.log(`WS server started on port ${5000}`);

wss.on('connection', (ws) => {
    ws.on('message', async (message) => {
        for (let i = 0; i< 20; ++i) {
            ws.send(JSON.stringify(i));
            await new Promise((f) => setTimeout(f, 1000));
        }
        ws.close();
    });
});