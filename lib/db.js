const mysql = require('mysql2')
// require('dotenv').config();
const connectionString = 'mysql://lo3whoexjtm6mvkm7jh2:pscale_pw_JW6rTc5HLCCRmWXgdOPcZQBMlDNVQFcKQYUSbJC0pPz@us-east.connect.psdb.cloud/game-backlog?ssl={"rejectUnauthorized":true}'
const connection = mysql.createConnection(connectionString)
connection.connect();
export default connection;