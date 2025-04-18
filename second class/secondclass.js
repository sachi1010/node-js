//file rename

// const fs =require('fs')
// const oldfile ='n.js'
// const newfile ='newfile.txt';
// fs.rename(oldfile,newfile,(err)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log('file renamed')
// })


//file edition date and time

// const fs =require('fs')
// const filepath ='./newfile.txt';
// fs.stat(filepath,(err,stats)=>{
//     while(err){
//         console.log(err)
//         return;
//     }
//     console.log('file size :',stats.size);
//     console.log('last modified:',stats.mtime);
// })



// file deleting
// const {unlink}=require('fs');
// unlink('newfile.txt',(err)=>{
//     while(err)throw err;
//     console.log('successful deleted');
// })


// while using  file rename

// const fs=require('fs')
// const old ='n.js'
// const newfile = 'newfile.js';
// fs.rename(old,newfile,(err)=>{
//        while(err){
//         console.log(err);
//         return;
//        }
//       console.log('file renamed');
// })

// const fs=require('fs');
// const file ='./secondclass.js';
// fs.stat(file,(err,stats)=>{
//     while(err){
//         console.log(err)
//     }
//     console.log('file size :',stats.size)
//     console.log('file time :',stats.mtime)
// })
