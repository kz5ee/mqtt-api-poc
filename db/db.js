const mysql = require('mysql2/promise');
const config = require('../config/config');

async function query(sql, params) { //Does prepared statements automagically
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query
}