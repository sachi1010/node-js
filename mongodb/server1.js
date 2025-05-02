const http = require('http');
const{MongoClient,ObjectId} = require('mongodb');

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
const dbName = "productdb";

async function withDB(fn) {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('product');
    return fn(collection);
}

const server = http.createServer(async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if(req.method === 'OPTIONS'){
        res.writeHead(204);
        res.end();
        return
    }

    if (req.url === "/api/product" && req.method === "GET") {
         const data = await withDB((col) => col.find().toArray());
         res.writeHead(200, { "Content-Type": "application/json" });
         res.end(JSON.stringify(data));
     }
     else if(req.url === "/api/product" && req.method === "POST"){
        let body ='';
       req.on("data",chunk =>(body += chunk));
       req.on("end",async()=>{
             const newEntry =  JSON.parse(body);
             await withDB((col)=> col.insertOne(newEntry));
             res.end("entry added");
       })
     }
     else if (req.url.startsWith("/api/product/") && req.method === "PUT") {
                const id = req.url.split("/")[3];
                let body = "";
                req.on("data", chunk => (body += chunk));
                req.on("end", async () => {
                  const updated = JSON.parse(body);
                  await withDB((col) =>
                    col.updateOne({ _id: new ObjectId(id) }, { $set: updated })
                  );
                  res.end("Entry updated.");
                });
     }
    else if (req.url.startsWith("/api/product/") && req.method === "DELETE") {
    const id = req.url.split("/")[3];
    await withDB((col) => col.deleteOne({ _id: new ObjectId(id) }));
    res.end("Entry deleted.");
  }
  else{
    res.writeHead(404);
     res.end("not found");
  }
})

server.listen(5001 ,() => console.log("server running at http://localhost:5001"));

