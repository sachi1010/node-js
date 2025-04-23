// var http =require('http');
// var fs=require('fs');
// http.createServer(function(req,res){
//     fs.readFile('d.json',function(err,data){
//         console.log(req)
//         res.writeHead(200,{'content-type':'text/json'});
//         res.write(data);
//         return res.end();
//     }) 
// }).listen(3001);



var http =require('http');
var fs =require('fs');

http.createServer(function(req,res){
    // set cors this is using a connect react and node
    res.setHeader('Access-Control-Allow-Orgin','*');//allow all domains
    res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-type');

//handle preflight requets
    if(req.method==='OPTIONS'){
        res.writeHead(204);
        return res.end();
    }
    else if(req.method==='GET'){
        fs.readFile('index.html',function(err,data){
            if(err){
                res.writeHead(500,{'content-type':'text/plain'});
                res.write('internal server error');
                return res.end();
            }
            res.writeHead(500,{'content-type':'text/html'})
            res.write(data)
        });
    }
    else if(req.method === 'POST'){
        fs.readFile('k.json',function(err,data){
            if(err){
                res.writeHead(404,{'Content-type':'text/json'});
                res.write('file not found');
                return res.end()
            }
            res.writeHead(200,{'Content-type':'application/json'});
            res.write(data);
            return res.end()
        })
    }
}).listen(3002,()=>{
    console.log('server ruuning http://localhost:3002/')
})

