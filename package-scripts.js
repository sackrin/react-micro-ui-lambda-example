const { series, rimraf, mkdirp } = require('nps-utils');

module.exports = {
  scripts: {
    default: 'nps local',
    local: {
      default: 'nodemon --watch src --exec npx nps local.serve',
      serve: series('npx nps bundle', 'babel-node src/localServer.js')
    },
    clean: {
      description: 'Deletes the various generated folders',
      script: series(rimraf('./.lambda'), rimraf('./.microui')),
    },
    build: {
      description: 'Builds Micro UI for lambda deployment',
      default: series('npx nps clean', 'npx nps build.routes', 'npx nps build.microui'),
      routes: series(mkdirp('.lambda'), `npx babel src --extensions '.ts,.tsx,.js' --config-file ./babel.lambda.config.json --out-dir ./.lambda`),
      microui: series(mkdirp('.microui'), `npx webpack --config ./webpack.config.js`),
    },
    bundle: {
      description: 'Bundles Micro UI for lambda deployment',
      default: series(rimraf('./microui.zip'), 'npx nps build'),
      zip: 'zip -r microui.zip microui.config.js .lambda .microui node_modules'
    },
  },
};
