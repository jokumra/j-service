const express = require('express')
const sampledatabase = require('../database/sampledata');
const database = require('../database/main.js');
const app = express();
const bodyParser = require('body-parser');
const port = 3003;

app.use(express.static('client/dist1'));
app.use(bodyParser.json());
app.get('/house_images', (req,res) => {
   let id = req.query.id;
   console.log("Request query:", id);

  database.getImages(id,(data)=> {
   // console.log("Got data:", data);
    res.send({results:data});
  });
  //console.log("Sample data:", data);

})

app.listen(port, () => console.log(`app listening on port ${port}!`))