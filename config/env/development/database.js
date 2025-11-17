const parse = require("pg-connection-string").parse;
const path = require('path');
const config = process.env.DEV_DATABASE_URL ? parse(process.env.DEV_DATABASE_URL) : ''

module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
        filename: path.join(
          __dirname,
          "..",
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
});
