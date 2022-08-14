const express = require("express")

const app = express()

app.get('/api', (request, response) => {
    response.send('Hello world from Express!');
});

app.listen(1234)