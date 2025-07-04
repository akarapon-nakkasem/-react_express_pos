


// require the dependencies just installed from above commands
const sql = require('mssql/msnodesqlv8');

//create a database configuration
// var config = {
//    server: "ACER\\SQLEXPRESS", // e.g., 'DESKTOP-mjsi\\MSSQLEXPRESS'
//    database: "pos_system",
// //    user: 'sa', // please read above note
// //    password: "admin@12345", // please read above note
//    options: {
//        trustedConnection: true,
//    },
//    driver: "msnodesqlv8",
// };

var config = {
    server: "ACER\\SQLEXPRESS", // ชื่อเซิร์ฟเวอร์และ instance name ของ SQL Server
    database: "pos_system", // ชื่อฐานข้อมูล
    options: {
        trustedConnection: true // ใช้ Windows Authentication
    },
    driver: "msnodesqlv8" // ระบุไดรเวอร์ที่ใช้งาน
};


//note: please make double (\\) before your instance name
//if you get confused then please watch the video link at the bottom you can see in details about this

// now make the connections
sql.connect(config, function(err) {
   if (err) console.log(err);

   // make a request
   var request = new sql.Request();

   //make the query
   var query = "SELECT * FROM CUSTOMER"; 

   request.query(query, function(err, records) {
       if (err) console.log(err);
       else {
           console.log(records); // your output as records
       }
   });
});

module.exports = sql
