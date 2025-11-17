module.exports = {
    apps: [
      {
        name: 'strapi-app',
        cwd: '.', // Assuming your package.json is in the root
        script: 'npm',
        args: 'run start',
        env: {
          NODE_ENV: 'production'
        },
        output: './logs/production.out.log',
        error: './logs/production.err.log',
        log_date_format: 'YYYY-MM-DD HH:mm:ss',
        max_memory_restart: '1G', // Restart if memory exceeds 1GB
        max_restarts: 10, // Maximum number of restarts
        min_uptime: '5s', // Minimum uptime to consider app as running
        restart_delay: 4000, // Time to wait before restarting
        kill_timeout: 3000,
        exec_mode: 'fork', // Recommended for Strapi
        instances: 1,
        autorestart: true,
        watch: false, // Disable file watching in production
      },
      // {
      //   name: 'strapi-development',
      //   cwd: '.', // Assuming your package.json is in the root
      //   script: 'npm',
      //   args: 'run develop',
      //   env: {
      //     NODE_ENV: 'development',
      //     PORT: 1337
      //   },
      //   output: './logs/development.out.log',
      //   error: './logs/development.err.log',
      //   log_date_format: 'YYYY-MM-DD HH:mm:ss',
      //   kill_timeout: 3000,
      //   max_memory_restart: '1G', // Restart if memory exceeds 1GB
      //   max_restarts: 10, // Maximum number of restarts
      //   min_uptime: '5s', // Minimum uptime to consider app as running
      //   restart_delay: 4000, // Time to wait before restarting
      //   exec_mode: 'fork', // Recommended for Strapi
      //   instances: 1,
      //   autorestart: false,
      //   watch: false, // Consider enabling for development if needed, but be mindful of performance
      // },
    ],
  };
