const mysql = require("mysql");
const faker = require("faker");
var images = [
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/aaron-huber-401200-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/andre-benz-283764-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg",
  "https://s3.us-east-2.amazonaws.com/mash-bnb-fec/annie-spratt-536921-unsplash.jpg"
];

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mashBnB"
});
connection.connect(err => {
  if (err) throw err;
  console.log("Connected!");
});

connection.query(
  'DELETE FROM house_images ', (err, result) => {
    if (err) throw err;

    console.log(`Deleted ${result.affectedRows} row(s)`);
  }
);

for (let i = 1, j = 0; i <= 100; i++) {
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
    j=0;
  } else {
    j+=1;
  }
}
