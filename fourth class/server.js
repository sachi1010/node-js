
// const fs = require('fs');
// const readStream = fs.createReadStream('input.txt', 'utf-8');
// const writeStream = fs.createWriteStream('output.txt', 'utf-8');
// let bufferData = '';

// readStream.on('data', (chunk) => {
//   const modifiedChunk = chunk.toString().toUpperCase();
//   bufferData += modifiedChunk;
// });

// readStream.on('end', () => {
//   writeStream.write(bufferData);
//   writeStream.end();
// });
// writeStream.on('finish', () => {
//   console.log('Data has been written to output');
// });
// readStream.on('error', (err) => {
//   console.error('Error reading from input.txt:', err);
// });

// writeStream.on('error', (err) => {
//   console.error('Error writing to output.txt:', err);
// }); 


// const fs = require('fs');

// const readStream = fs.createReadStream('input.txt');
// const writeStream = fs.createWriteStream('output.txt');

// readStream.on('data', (chunk) => {
//   writeStream.write(chunk);
// });

// readStream.on('end', () => {
//   writeStream.end();
// }); 



// const fs = require('fs');

// const readStream = fs.createReadStream('input.png');
// const writeStream = fs.createWriteStream('output.png');

// readStream.pipe(writeStream);

// writeStream.on('finish', () => {
//   console.log('Image copied successfully.');
// });

// writeStream.on('error', (err) => {
//   console.error('Error writing the image:', err);
// });  




// const fs = require('fs');
// const { Transform } = require('stream');

// const readStream = fs.createReadStream('input.txt');
// const writeStream = fs.createWriteStream('output.txt');

// const transformStream = new Transform({
//   transform(chunk, encoding, callback) {
//     // Transform the chunk (e.g., reverse it)
//     const transformedChunk = chunk.toString().split('').reverse().join('');
//     this.push(transformedChunk);
//     callback();
//   }
// });

// readStream.pipe(transformStream).pipe(writeStream);

// writeStream.on('finish', () => {
//   console.log('Data transformed and written successfully.');
// });

// writeStream.on('error', (err) => {
//   console.error('Error writing the transformed data:', err);
// });


