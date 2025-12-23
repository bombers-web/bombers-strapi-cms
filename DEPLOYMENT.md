# GitHub Actions Deployment Setup

## 🚀 Automated Deployment to AWS Lightsail

This repository includes GitHub Actions workflows to automatically deploy your Strapi application to AWS Lightsail when changes are pushed to the master branch.

## 📋 Prerequisites

### 1. AWS Lightsail Instance Setup
- Ubuntu/Debian Lightsail instance running
- Node.js 20+ installed
- Git installed
- PM2 process manager installed (`npm install -g pm2`)
- Your repository cloned to `/opt/bombers-strapi-cms`

### 2. SSH Key Setup
Generate an SSH key pair for GitHub Actions:
```bash
ssh-keygen -t rsa -b 4096 -C "github-actions@bombers-cms"
```

Add the public key to your Lightsail instance:
```bash
# On your Lightsail instance
mkdir -p ~/.ssh
echo "YOUR_PUBLIC_KEY_HERE" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

## 🔐 Required GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions, and add these secrets:

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `LIGHTSAIL_HOST` | Your Lightsail instance IP address | `203.0.113.1` |
| `LIGHTSAIL_USERNAME` | SSH username (usually `ubuntu` or `bitnami`) | `ubuntu` |
| `LIGHTSAIL_SSH_KEY` | Private SSH key content | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `LIGHTSAIL_PORT` | SSH port (optional, defaults to 22) | `22` |
| `APP_URL` | Your application URL (optional) | `https://yourdomain.com` |

## 📁 Lightsail Instance Directory Structure

```
/opt/bombers-strapi-cms/          # Main application directory
├── .env                          # Environment variables
├── ecosystem.config.js           # PM2 configuration
├── package.json
└── ...

/opt/backups/                     # Backup directory
├── backup_20241117_143022.tar.gz
└── ...
```

## ⚙️ PM2 Setup on Lightsail

1. **Install PM2 globally:**
```bash
npm install -g pm2
```

2. **Create or update your `ecosystem.config.js`:**
```javascript
module.exports = {
  apps: [{
    name: 'strapi-app',
    script: 'npm',
    args: 'run start',
    cwd: '/opt/bombers-strapi-cms',
    env: {
      NODE_ENV: 'production',
      PORT: 1337
    },
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '1G',
    error_file: '/var/log/pm2/strapi-error.log',
    out_file: '/var/log/pm2/strapi-out.log',
    log_file: '/var/log/pm2/strapi-combined.log',
    time: true
  }]
}
```

3. **Start your application:**
```bash
cd /opt/bombers-strapi-cms
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## 🔄 Deployment Process

The GitHub Action will:

1. **Test** - Run linting and tests (if available)
2. **Build** - Create production build of your Strapi app
3. **Deploy** - SSH to Lightsail and:
   - Create backup of current deployment
   - Pull latest code from master branch
   - Install production dependencies
   - Build the application
   - Run database migrations
   - Restart the application with PM2
   - Perform health check
   - Clean up old backups (keeps last 5)

## 🚨 Rollback Process

If deployment fails, the workflow will automatically:
- Restore from the most recent backup
- Restart the application
- Notify about the rollback

## 🔍 Monitoring Deployments

### Check deployment logs in GitHub:
- Go to Actions tab in your repository
- Click on the latest workflow run
- Check each step's logs

### Check application logs on Lightsail:
```bash
# PM2 logs
pm2 logs strapi-app

# System logs
sudo journalctl -u pm2-ubuntu -f

# Application files
ls -la /opt/bombers-strapi-cms
```

## 🛠️ Troubleshooting

### Common Issues:

1. **SSH Permission Denied**
   - Verify SSH key is correct in GitHub secrets
   - Check key has been added to `authorized_keys`
   - Ensure correct username (ubuntu/bitnami)

2. **PM2 App Not Starting**
   - Check ecosystem.config.js syntax
   - Verify Node.js version compatibility
   - Check environment variables in .env

3. **Build Failures**
   - Verify all dependencies are in package.json
   - Check Node.js version matches between local and Lightsail
   - Ensure sufficient memory on Lightsail instance

4. **Database Connection Issues**
   - Verify database credentials in .env
   - Check database server is running
   - Confirm network connectivity

### Manual Deployment Commands:
```bash
# SSH to your Lightsail instance
ssh ubuntu@YOUR_LIGHTSAIL_IP

# Navigate to app directory
cd /opt/bombers-strapi-cms

# Manual deployment steps
git pull origin master
npm ci --production
npm run build
pm2 restart strapi-app

# Check status
pm2 status
pm2 logs strapi-app --lines 50
```

## 🔧 Customization

You can customize the deployment by:
- Modifying the workflow files in `.github/workflows/`
- Updating the PM2 configuration in `ecosystem.config.js`
- Adding pre/post deployment scripts
- Configuring different environments (staging/production)

## 🎯 Next Steps

1. Set up all required GitHub secrets
2. Configure your Lightsail instance with PM2
3. Test the deployment by pushing to master branch
4. Monitor the first deployment in GitHub Actions
5. Verify your application is running on Lightsail