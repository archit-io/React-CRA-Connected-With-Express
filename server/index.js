const express = require("express")
const users = require('./routes/users');

app.use('/api/users', users);

const app = express()

app.get('/api', (request, response) => {
    response.send('Hello world from Express!');
});

app.listen(1234)