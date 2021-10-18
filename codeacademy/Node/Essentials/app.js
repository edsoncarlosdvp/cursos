//FS MODULE
const fs = require('fs');

let secretWord = null;

let readDataCallback = (err, data) => {
    if (err) {
        console.log(`Something went wrong: ${err}`);
    } else {
        console.log(`Provided file contained: ${data}`);
    }
};

//fs.readFile('./fileOne.txt', 'utf-8', readDataCallback);
//fs.readFile('./anotherFile.txt', 'utf-8', readDataCallback);
fs.readFile('./finalFile.txt', 'utf-8', readDataCallback);

secretWord = "cheeseburgerpizzabagels"const fs = require('fs');

let secretWord = null;

let readDataCallback = (err, data) => {
    if (err) {
        console.log(`Something went wrong: ${err}`);
    } else {
        console.log(`Provided file contained: ${data}`);
    }
};

//fs.readFile('./fileOne.txt', 'utf-8', readDataCallback);
//fs.readFile('./anotherFile.txt', 'utf-8', readDataCallback);
fs.readFile('./finalFile.txt', 'utf-8', readDataCallback);

secretWord = "cheeseburgerpizzabagels"

// Readable Streams
const readline = require('readline');
const fs = require('fs');

let settings = {
    input: fs.createReadStream('shoppingList.txt')
};

const myInterface = readline.createInterface(settings);

const printData = (data) => {
    console.log(`Item: ${data}`);
};

myInterface.on('line', printData);

// Writeable Streams
const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
    input: fs.createReadStream('shoppingList.txt')
});


const fileStream = fs.createWriteStream('shoppingResults.txt');

let transformData = (line) => {
    fileStream.write(`They were out of: ${line}\n`);
};

// This Timers Module
myInterface.on('line', transformData);

setImmediate(() => {
    console.log('I got called right away!')
})