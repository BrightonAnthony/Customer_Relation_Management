// Import the mysql2 library
const mysql = require('mysql2');

// Create a connection pool (recommended for production)
const pool = mysql.createPool({
  host: 'localhost',
  user: 'brighton',
  password: 'bri123',
  database: 'crm',
  waitForConnections: true,
  connectionLimit: 10, // Adjust based on your needs
  queueLimit: 0,
});

// Execute a sample query
pool.query('SELECT * from signup', (error, results, fields) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
    return;
  }

  // Print the result
  console.log('MySQL Connected!');
  console.log('Result:', results[0].result);

  // Release the connection when done
  pool.end();
});
