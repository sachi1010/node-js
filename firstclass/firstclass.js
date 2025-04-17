//  first class in node js

// const os=require('os')
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())


// console.log(__dirname)
// console.log(__filename)

// const path=require('path')
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))


// const m=require('./mathfile')
// console.log(m.add(5,6))
// console.log(m.sub(5,6))
// console.log(m.mul(5,8))


// const {add,sub,mul}=require('./mathfile')
// console.log(add(5,6))
// console.log(sub(5,6))
// console.log(mul(5,8))



//directory create 

//fs-filesystem  mkdir-make directory

// const fs = require('fs');
// fs.mkdir("newfile",(err)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log('directory created ')
// })


//check the directory
// const fs =require('fs')
// fs.readdir('./newfile',(err,file)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log(file)
// })

//check the file
// const fs =require('fs')
// const filepath ='./em.js';
// if(fs.existsSync(filepath)){
//     console.log('file exists');
// }
// else{
//     console.log('file not exists');
// }


//write and create a file
// const fs =require('fs')
// const filepath ='./em.js';
// const datawrite ='console.log("hii")';
// const encoding='utf8'
// fs.writeFile(filepath,datawrite,encoding,(err)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log('data has written ')
// })


//file reading
const fs =require('fs')
const filepath ='./em.js';
const encoding='utf8'
fs.readFile(filepath,encoding,(err,data)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(data)
    })
    console.log("end")