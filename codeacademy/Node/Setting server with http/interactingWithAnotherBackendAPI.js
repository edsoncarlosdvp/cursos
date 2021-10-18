const options = {
    hostname: 'example.com',
    port: 8080,
    path: '/projects',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}

const request = http.request(options, res => {
    // Handle response here
})