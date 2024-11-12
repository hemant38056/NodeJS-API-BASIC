const express = require('express');
const app = express();
const myrouter = require('./route');
const cors = require('cors');
const port = 1995;

app.use(express.json());
app.use(cors());

app.use('/', myrouter);

app.listen(port, () => {
    console.log(`Click Here http://localhost:${port}`)
})