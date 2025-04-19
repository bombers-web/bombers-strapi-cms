module.exports = {
    apps: [
      {
        name: 'strapi-production',
        cwd: '.', // Assuming your package.json is in the root
        script: 'npm',
        args: 'run start',
        env: {
          NODE_ENV: 'production',
        },
        output: './logs/production.out.log',
        error: './logs/production.err.log',
        log_date_format: 'YYYY-MM-DD HH:mm:ss',
        restart_delay: 1000,
        kill_timeout: 3000,
        exec_mode: 'fork', // Recommended for Strapi
        instances: 1,
        autorestart: true,
        watch: false, // Disable file watching in production
      },
      {
        name: 'strapi-development',
        cwd: '.', // Assuming your package.json is in the root
        script: 'npm',
        args: 'run develop',
        env: {
          NODE_ENV: 'development',
        },
        output: './logs/development.out.log',
        error: './logs/development.err.log',
        log_date_format: 'YYYY-MM-DD HH:mm:ss',
        restart_delay: 1000,
        kill_timeout: 3000,
        exec_mode: 'fork', // Recommended for Strapi
        instances: 1,
        autorestart: false,
        watch: false, // Consider enabling for development if needed, but be mindful of performance
      },
    ],
  };
