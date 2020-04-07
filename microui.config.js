const path = require('path');

const port = 8330;

module.exports = {
  name: 'exampleMicroUI',
  assets: {
    target: 'umd',
    url: 'http://localhost:9000',
  },
  manifest: {
    filepath: path.join(process.cwd(), '.microui', 'manifest.json'),
    entry: 'main.js',
  },
  api: {
    url: 'http://localhost:9000',
    port: port,
    trustProxy: 'trust proxy',
    cors: { origin: '*' },
    messages: {
      START_UP: 'API Layer starting',
      STARTED_UP: 'API started and listening on port',
      CRASHED: 'API crashed with message'
    },
  },
  environments: {
    default: 'local',
    profiles: {
      local: {
        assets: {
          url: 'http://localhost:9000',
          env: {}
        },
        api: {
          url: 'http://localhost:9000',
          path: '/api',
          port: 8080,
          env: {}
        },
      },
      latest: {
        assets: {
          url: process.env.ASSET_URL || 'http://localhost:9000',
          env: {}
        },
        api: {
          url: process.env.API_URL || 'http://localhost:9000',
          port: process.env.API_PORT || 9000,
          env: {}
        },
      },
    },
  },
};
