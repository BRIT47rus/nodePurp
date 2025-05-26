import express from 'express';
const app = express();

const host = '127.0.0.1';
const port = 5000;

app.listen(port, () => {
    console.log('Server started');
});
