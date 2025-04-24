const WebSocket =require('ws');
const server =new WebSocket.Server({port:3001});

server.on('connection',(socket)=>{
    console.log('A client connected');

//handle incoming messages from clients
socket.on('message',(message)=>{
    console.log(`received :${message}`);

//send a response back to the client
socket.send('this message from server')
});

//handle disconnects
socket.on('close',()=>{
    console.log('A client disconnected')
});
})
