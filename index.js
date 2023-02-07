const express = require('express');
const api_config = require('./config');
const cors = require('cors');

// routers
const todoRouter = require('./api/routers/todoRouter');
const userRouter = require('./api/routers/userRouter');

const app = express();
const port = api_config.port;


app.use(express.json());
app.use(cors({
    origin : [
        'http://localhost:3000'
    ]
}))

app.use('/todo', todoRouter);
app.use('/user', userRouter);


app.listen(port, () => {
    console.log('server started..');
})