const express = require('express');

const bodyParser = require('body-parser');

const database = require('../database/main.js');

const app = express();

const port = 3003;

app.use(express.static('client/dist1'));
app.use(bodyParser.json());
app.get('/house_images', (req, res) => {
  const id = req.query.id;

  database.getImages(id, (data) => {
    res.send({ results: data });
  });
});

app.listen(port, () => console.log(`app listening on port ${port}!`));