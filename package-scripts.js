const { series, rimraf, mkdirp, concurrent } = require('nps-utils');
const microUiConfig = require('./microui.config.js');

module.exports = {
  scripts: {
    default: 'nps local',
    local: {
      default: 'nodemon --watch src --exec npx nps local.serve',
      serve: series('npx nps bundle', concurrent({ stories: 'npx nps local.stories', server: 'npx nps local.lambda' })),
      lambda: "babel-node --extensions '.ts,.tsx,.js' --config-file ./babel.lambda.config.json src/localServer.js",
      stories: 'npx nps storybook',
    },
    storybook: {
      default: `npx start-storybook -p ${microUiConfig.storybook.port}`,
      build: 'npx build-storybook',
    },
    standards: {
      default: series('npx nps standards.unit', 'npx nps standards.integration'),
      unit: 'npx jest',
      integration: 'npx cypress run'
    },
    build: {
      description: 'Builds Micro UI for lambda deployment',
      default: series('npx nps clean', 'npx nps build.routes', 'npx nps build.microui'),
      routes: `npx babel src --extensions '.ts,.tsx,.js' --config-file ./babel.lambda.config.json --out-dir ./.lambda`,
      microui: series(mkdirp('.microui'), `npx webpack --config ./webpack.config.js`),
    },
    bundle: {
      description: 'Bundles Micro UI for lambda deployment',
      default: series(rimraf('./microui.zip'), 'npx nps build'),
      zip: 'zip -r microui.zip microui.config.js .lambda .microui node_modules',
    },
    clean: {
      description: 'Deletes the various generated folders',
      script: series(rimraf('./.lambda'), rimraf('./.microui')),
    },
  },
};
