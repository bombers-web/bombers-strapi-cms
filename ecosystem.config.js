module.exports = {
    apps: [
      {
        name: 'strapi-app',
        cwd: '.',
        script: 'npm',
        args: 'run start',
        interpreter: '/home/ubuntu/.nvm/versions/node/v20.19.6/bin/node',
        env: {
          NODE_ENV: 'production'
        },
        output: './logs/production.out.log',
        error: './logs/production.err.log',
        log_date_format: 'YYYY-MM-DD HH:mm:ss',
        max_memory_restart: '800M',
        max_restarts: 10,
        min_uptime: '5s',
        restart_delay: 4000,
        kill_timeout: 3000,
        exec_mode: 'fork',
        instances: 1,
        autorestart: true,
        watch: false,
      },
    ],
  };