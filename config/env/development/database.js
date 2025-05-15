// const parse = require("pg-connection-string").parse;
// const path = require('path');
// const config = process.env.DATABASE_URL ? parse(process.env.DATABASE_URL) : ''

// module.exports = ({ env }) => ({
//   connection: {
//     client: "sqlite",
//     connection: {
//         filename: path.join(
//           __dirname,
//           "..",
//           "..",
//           env("DATABASE_FILENAME", ".tmp/data.db")
//         ),
//       },
//       useNullAsDefault: true,
//     },
// });
const parse = require("pg-connection-string").parse;
const path = require("path");
const { settings } = require("../../../v3/config/middleware");
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: "127.0.0.1",
      port: "5432",
      database: "dbstrapi-dev",
      user: "postgres",
      password: "Mizzou1410?",
      settings: {
        forceMigration: false,
        runMigrations: false,
      }
    },
  },
});
