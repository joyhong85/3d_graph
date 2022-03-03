const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/sample.html');
});

app.get('/data', (req, res) => {
  res.sendFile(__dirname + '/miserables.json');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
