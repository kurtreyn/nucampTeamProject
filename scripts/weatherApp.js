const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Server is up and running');
});

app.listen(5500, function () {
  console.log('server is running on port 5500');
});
