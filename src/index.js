const express = require('express');

const app = express()

app.get('/', function (req, res) {
    res.send('Hello')
});

app.post('/item', function (req, res) {
    res.send('POST request at /user')
  });

app.put('/item', function (req, res) {
res.send('PUT request at /user')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})