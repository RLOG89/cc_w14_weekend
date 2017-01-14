import express from 'express'
const app = express()
import path from 'path'

app.get('/', function (req, res) {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

app.use(express.static('client/build'));


const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
