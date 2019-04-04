const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mashBnB"
});
con.connect(err => {
  if (err) throw err;
  console.log("Connected!");
});

const getImages = function(houseId, callback) {

  con.query(
    "SELECT * FROM house_images where house_id =?",
    [houseId],
    (err, rows) => {
      if (err) throw err;

      console.log("Data received from Db:\n");
      console.log(rows);
      callback(rows);
    }
  );
};
const closeConnection = function() {
  con.end(err => {
    console.log("Dis-connected!");
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
  });
};
module.exports.getImages = getImages;
