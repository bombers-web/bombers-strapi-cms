const parse = require("pg-connection-string").parse;

module.exports = ({ env }) => {
  const databaseUrl = env('DEV_DATABASE_URL');

  if (!databaseUrl) {
    console.log('No DEV_DATABASE_URL found, using SQLite');
    return getSqliteConfig();
  }

  const config = parse(databaseUrl);

  // Use parsed PostgreSQL config
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: config.ssl ? { rejectUnauthorized: false } : false,
        schema: env('DATABASE_SCHEMA', 'public'), // In case you use a custom schema
      },
      debug: false,
    },
  };
};

function getSqliteConfig() {
  console.log('Falling back to SQLite configuration');
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      useNullAsDefault: true,
      debug: false,
    },
  };
}
