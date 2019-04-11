const mysql = require("mysql");
const faker = require("faker");
/*const fs = require("fs");
const testFolder = './../../houses/';

var images1 = [];

fs.readdirSync(testFolder).forEach(file => {
  let fname="https://s3.us-east-2.amazonaws.com/mash-bnb-fec/"+file
  console.log(file);
  images1.push(fname);
});
console.log(images1);*/

var images = [
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/aaron-huber-401200-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/andre-benz-283764-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/armin-djuhic-609206-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/arno-smit-83025-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/avery-klein-750175-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/chris-barbalis-135753-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/christopher-jolly-616571-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/daniel-klaffke-1411551-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/drew-coffman-94401-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/element5-digital-685202-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/federico-beccari-60061-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/jason-briscoe-332508-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/jose-rago-631486-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/joshua-ness-109299-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/justin-schuler-253611-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/lindsey-lamont-1117391-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/margaret-barley-42-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/neonbrand-263851-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/ng-15322-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/orlova-maria-379663-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/orlova-maria-379689-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/outsite-co-322866-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/patrick-perkins-340019-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/pierre-chatel-innocenti-763574-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/rhema-kallianpur-560711-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/sabrina-mazzeo-658832-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/sonnie-hiles-489078-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/stefen-tan-759874-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/terrah-holly-16329-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/timothy-buck-309898-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/toa-heftiba-685987-unsplash.jpg',
'https://s3.us-east-2.amazonaws.com/mash-bnb-fec/xochi-111556-unsplash.jpg' ];

console.log("Seeding begins");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"password",
  database: "mashBnB"
});
connection.connect(err => {
  if (err) throw err;
  console.log("Connected!");
});

connection.query("DELETE FROM house_images ", (err, result) => {
  if (err) throw err;

  console.log(`Deleted ${result.affectedRows} row(s)`);
});

connection.query("ALTER TABLE house_images AUTO_INCREMENT = 1");

for (let i = 1; i <= 100; i++) {
  let j = Math.floor(Math.random() * images.length);
  for (let k = 0; k < 5; k++) {
    const Image = {
      house_id: i,
      description: faker.lorem.sentence(),
      image_url: images[j]
    };
    connection.query("INSERT INTO house_images SET ?", Image, (err, res) => {
      if (err) throw err;
      console.log("Last insert ID:", res.insertId);
    });
    if (j === images.length - 1) {
      j = 0;
    } else {
      j += 1;
    }
  }
}
connection.end(function(err) {
  // The connection is terminated now
  if (err) throw err;
  console.log("Connection closed");
});

process.on("exit", function(code) {
  return console.log(`About to exit with code ${code}`);
});
