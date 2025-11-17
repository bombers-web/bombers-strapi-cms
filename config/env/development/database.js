// // New v5 format
// module.exports = ({ env }) => ({
//   client: env('DATABASE_CLIENT', 'sqlite'),
//   connection: {
//     filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//     // PostgreSQL config for production
//     host: env('DATABASE_HOST'),
//     port: env.int('DATABASE_PORT'),
//     database: env('DATABASE_NAME'),
//     user: env('DATABASE_USERNAME'),
//     password: env('DATABASE_PASSWORD'),
//     ssl: env.bool('DATABASE_SSL', false) && {
//       rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
//     },
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    },
    useNullAsDefault: true,
    debug: false,
  },
});