import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/manasi', (req, res) => {
    res.send("Hey buddy, i am manasi");
})

app.get('/api/jokes',( req, res) => {
    const jokes=[
        {
            id: 1,
            title:'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title:'A joke',
            content: 'This is a joke'
        },
        {
            id: 3,
            title:'A joke',
            content: 'This is a joke'
        }
    ]
    console.log(jokes);
    res.send(jokes);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});



