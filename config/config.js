const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "dbhost",
      user: "dbuser",
      password: "dbpass",
      database: "dbName",
      connectTimeout: 60000
    },
    listPerPage: 10,
  };
  module.exports = config;