const express = require('express')
const database = require('../database/sampledata');
const app = express()
const port = 3003

//app.use(express.static('client/dist'));
app.get('/house_images', (req,res) => {
  let data = database.sampleData;
  //console.log("Sample data:", data);
  res.send({results:data});
})

app.listen(port, () => console.log(`app listening on port ${port}!`))