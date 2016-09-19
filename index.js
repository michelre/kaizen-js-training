import express from 'express';
const app = express();

app.get('/', (req, res) => {

});

app.get('/add/:op1/:op2', (req, res) => {

});

app.get('/sub/:op1/:op2', (req, res) => {

});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
