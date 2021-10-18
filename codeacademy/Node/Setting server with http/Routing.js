const server = http.createServer((req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            return handleGetRequest(req, res);
        case 'POST':
            return handlePostRequest(req, res);
        case 'DELETE':
            return handleDeleteRequest(req, res);
        case 'PUT':
            return handlePutRequest(req, res);
        default:
            throw new Error(`Unsupported request method: ${method}`);
    }
})

function handleGetRequest(req, res) {
    const { pathname } = new URL(req.url);
    let data = {};

    if (pathname === '/projects') {
        data = await getProjects();
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(data));
    }

    res.statusCode = 404;
    return res.end('Requested resource does not exist');

}