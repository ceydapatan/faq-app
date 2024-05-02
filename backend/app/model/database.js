/* { createPool } = require('mysql');


const pool = createPool({
  host: "smtcigp00002.rd.corpintra.net",
  user: "EMEA\CEPATAN",
  password: "Erdemzeynep123.",
  database: "CPMH",
  connectionLimit: 10
})

pool.query(`select * from registration`, function (err, result, fields) {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
}) */

const sql = require('mssql/msnodesqlv8');


// Connect to SQL Server using Windows Auth


const connection = new sql.ConnectionPool({
  connectionString: 'Driver={ODBC Driver 18 for SQL Server};Server=smtcigp00002.rd.corpintra.net;Database=CPMH;Trusted_Connection=yes;TrustServerCertificate=yes'
});




connection.connect()
  .then(function () {
    console.log("Connected to SQL Server");
   // const result = connection.query(`INSERT INTO Project (ProjectName)
//VALUES('test6');`);
    //console.dir(result);
  })
  .catch(function (err) {
    console.log(err);
  }
  );




module.exports = connection;
