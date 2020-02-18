const express = require('express');
const app = express();

app.get('/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const c = a + b;

  res.send(`The sum of ${a} and ${b} is ${c}`);
});

app.listen(8080, () => console.log('Server on 8080'));
