const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`${process.cwd()}/web`))

app.get('/', (req, res) => {
  res.sendFile(`${process.cwd()}/index.html`);
});

app.get('/add/:op1/:op2', (req, res) => {
  const op1 = parseInt(req.params.op1, 10);
  const op2 = parseInt(req.params.op2, 10);
  res.send({ op1, op2, result: op1 + op2 });
});

app.get('/sub/:op1/:op2', (req, res) => {
  const op1 = parseInt(req.params.op1, 10);
  const op2 = parseInt(req.params.op2, 10);
  res.send({ op1, op2, result: op1 - op2 });
});

app.get('/mult/:op1/:op2', (req, res) => {
  const op1 = parseInt(req.params.op1, 10);
  const op2 = parseInt(req.params.op2, 10);
  res.send({ op1, op2, result: op1 * op2 });
});

app.get('/div/:op1/:op2', (req, res) => {
  const op1 = parseInt(req.params.op1, 10);
  const op2 = parseInt(req.params.op2, 10);
  res.send({ op1, op2, result: op1 / op2 });
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
