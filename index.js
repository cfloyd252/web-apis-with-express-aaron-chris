const express = require('express');
const app = express();

app.get('/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const c = a + b;

  res.send(`The sum of ${a} and ${b} is ${c}`);
});

app.get('/cipher', (req, res) => {
  const text = req.query.text;
  const shift = Number(req.query.shift);
  const convertedText = Array.from(text).map(index => {
    index.
  })

  res.send(Array.from(text));
});

app.listen(8080, () => console.log('Server on 8080'));
