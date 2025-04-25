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




// const http =require('http');

// const server = http.createServer((req,res)=>{
//     if(req.method ==='POST'){
//         let body='';

//         req.on('data',(chunk)=>{
//             body+=chunk;
//         });

//         req.on('end',()=>{
//             res.setHeader('content-type','text/json');
//             res.end('data received and prossed.'+body)
//         })
//     }else{
//         res.statusCode=405;
//         res.setHeader('content-type','text/plain');
//         res.end('405 method not allowed');
//     }
// });

// const port =3003;
// server.listen(port,()=>{
//     console.log(`server is running on ${port}`)
// });



const http =require('http');
const fs =require('fs');

const server = http.createServer((req,res)=>{
    
     if(req.method === 'GET'){
        fs.readFile('index.html',function(err,data){
            if(err){
                res.writeHead(500,{'content-type':'text/plain'});
                res.write('server error');
                return res.end();
            }
            res.writeHead(500,{'content-type':'text/html'})
            res.write(data);
        });
    }

    else if(req.method === 'POST'){
                    let body='';
                    req.on('data',(chunk)=>{
                        body+=chunk;
                    });
                    
                    req.on('end',()=>{
                        try{
                              let parseddata = body.split('&').stringify()
                                let splitdata = parseddata.split('=')
                                splitdata.JSON.stringify();  
                                                             
                        } 
                        catch(error){
                           console.log(error)
                        }

                        res.setHeader('content-type','text/json');
                        res.end('data received'+body);
                    });
                }
    else{
                    res.statusCode=405;
                    res.setHeader('content-type','text/plain');
                    res.end('post method');
    }
    })

server.listen(3001,()=>{
    console.log('server ruuning http://localhost:3001/');
})
