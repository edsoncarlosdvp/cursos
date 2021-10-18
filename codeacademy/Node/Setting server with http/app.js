const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World');
});

server.listen(4001, () => {
    const { address, port } = server.address();
    console.log(`Server is listening on: http://${address}:${port}`);
});

// The URL Module

const url = require('url');

const URL_TO_PARSE = 'https://www.example.com/p/a/t/h?prop1=value1&prop2=value2';

const myUrl = new URL(URL_TO_PARSE);

const hostname = myUrl.hostname;
const pathname = myUrl.pathname;
const searchParams = myUrl.searchParams;

// The Querystring Module
const querystring = require('querystring');

const url = 'https://www.example.com/p/a/t/h?course=node&lesson=http';

// Isolate query string from url
const queryToParse = url.split('?')[1];
console.log(queryToParse)

// Parse query string into object, then add new property
const parsedQuery = querystring.parse(queryToParse);
parsedQuery.exercise = 'querystring';

// Rebuild query string from object
const modifiedQueryString = querystring.stringify(parsedQuery);

// Routing
const http = require('http');

// Handle get request
const handleGetRequest = (req, res) => {
    const pathname = req.url;

    if (pathname === '/users') {
        res.end(JSON.stringify([]));
    }
}

// Creates server instance
const server = http.createServer((req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            return handleGetRequest(req, res);
        default:
            throw new Error(`Unsupported request method: ${method}`);
    }
});

// Starts server listening on specified port
server.listen(4001, () => {
    const { address, port } = server.address();
    console.log(`Server is listening on: http://${address}:${port}`);
});

// HTTP Status Codes

const http = require('http');

const handleGetRequest = (req, res) => {
    res.statusCode = 200;
    return res.end(JSON.stringify({ data: [] }));
}

const handlePostRequest = (req, res) => {
    res.statusCode = 500;
    return res.end("Unable to create record");
}

// Creates server instance
const server = http.createServer((req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            return handleGetRequest(req, res);
        case 'POST':
            return handlePostRequest(req, res);
        default:
            throw new Error(`Unsupported request method: ${method}`);
    }
});

// Starts server listening on specified port
server.listen(4001, () => {
    const { address, port } = server.address();
    console.log(`Server is listening on: http://${address}:${port}`);
});

// 
const http = require('http');
const fs = require('fs');

// GET request handler
const handleGetRequest = (req, res) => {
    if (req.url === '/users') {
        // Loads the database and searches for data
        makeDatabaseRequest('users', (err, payload) => {
            if (err) {
                res.writeHeader(400);
                res.write("Error retrieving data");
            } else {
                // Process successful request
                console.log(payload)
                res.writeHeader(200, { "Content-Type": "application/json" });
                res.write(JSON.stringify(payload));
            }
            res.end();
        });
    }
}

// Creates server instance
const server = http.createServer((req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            return handleGetRequest(req, res);
        default:
            throw new Error(`Unsupported request method: ${method}`);
    }
});

// Starts server listening on specified port
server.listen(4001, () => {
    const { address, port } = server.address();
    console.log(`Server is listening on: http://${address}:${port}`);
});

function makeDatabaseRequest(type, cb) {
    fs.readFile('./database.json', 'utf8', function (err, payload) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, JSON.parse(payload)[type]);
        }
    });
}

// Interacting with Another Backend API

// Review
const http = require('http');

// Handle GET Request
const handleGetRequest = (req, res) => {
    const options = {
        hostname: 'static-assets.codecademy.com',
        path: '/Courses/Learn-Node/http/data.json',
        method: 'GET'
    }

    const request = http.request(options, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', (chunk) => {
            res.end(data);
        });
    });

    request.end()
}

// Creates server instance
const server = http.createServer((req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            return handleGetRequest(req, res);
        default:
            throw new Error(`Unsupported request method: ${method}`);
    }
});

// Starts server listening on specified port
server.listen(4001, () => {
    const { address, port } = server.address();
    console.log(`Server is listening on: http://${address}:${port}`);
});