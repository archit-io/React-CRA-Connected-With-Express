const express = require("express")
const users = require('./routes/users');

const app = express()

app.use('/api/users', users);

app.get('/api', (request, response) => {
    response.send('Hello world from Express!');
});

app.listen(1234)