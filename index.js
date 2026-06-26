import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/manasi', (req, res) => {
    res.send("Hey buddy, i am manasi");
}
)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
