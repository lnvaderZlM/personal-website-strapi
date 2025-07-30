// path: ./config/plugins.ts

const crypto = require('crypto');

export default ({ env }) => ({
  // ...
  'users-permissions': {
    config: {
      jwtSecret: env('ADMIN_JWT_SECRET') || crypto.randomBytes(16).toString('base64'),
      jwt: {
        expiresIn: '7d',
      },
    },
  },
});