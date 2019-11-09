require("dotenv").config();
const path = require("path");

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "pass",
      database: process.env.DB_NAME || "calendar"
    },
    pool: { min: 0, max: 7 },
    seeds: {
      directory: path.join(__dirname, "/seeds")
    }
  }
};
