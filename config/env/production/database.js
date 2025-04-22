const parse = require("pg-connection-string").parse;
const path = require("path");
const { settings } = require("../../../v3/config/middleware");
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false, // For self-signed certificates
      },
      settings: {
        forceMigration: false,
        runMigrations: false,
      }
    },
  },
});
