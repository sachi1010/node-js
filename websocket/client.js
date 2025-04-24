// const WebSocket =require('ws');

// const client=new WebSocket('ws://localhost:3001');

// client.on('open',()=>{
//     console.log('connected to server');

//     //send a message to the server
//     client.send('hello,server!!!!');
// });

// client.on('message',(message)=>
// {
//     console.log(`received:${message}`);
// });

// //handle disconnection
// client.on('close',()=>{
//     console.log('disconnected from server')
// })




const http =require('http');

const server =http.createServer((req,res)=>{
    if(req.method ==='POST'){
        let body='';

        req.on('data',(chunk)=>{
            body+=chunk;
        });

        req.on('end',()=>{
            res.setHeader('content-type','text/json');
            res.end('data received and prossed.'+body)
        })
    }else{
        res.statusCode=405;
        res.setHeader('content-type','text/plain');
        res.end('405 method not allowed');
    }
});

const port =3003;
server.listen(port,()=>{
    console.log(`server is running on ${port}`)
});