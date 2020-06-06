const { series, rimraf, mkdirp, concurrent } = require('nps-utils');
const microUiConfig = require('./microui.config.js');

module.exports = {
  scripts: {
    default: 'nps local',
    local: {
      description: 'Scripts to run the micro frontend locally for development and demonstration',
      default: concurrent({ storybook: 'npx nps local.storybook', microui: 'npx nps local.microui', server: 'npx nps local.lambda' }),
      storybook: 'npx nps storybook',
      microui: series(mkdirp('.microui'), "npx webpack --watch --config ./webpack.config.js"),
      lambda: {
        default: 'npx nps local.lambda.watch',
        watch: 'nodemon --watch src --exec npx nps local.lambda.build',
        build: "babel-node --extensions '.ts,.tsx,.js' --config-file ./babel.lambda.config.json src/localServer.js"
      }
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
    deploy: {
      description: 'Deploys the lambda to AWS',
      default: series('npx nps build', 'npx nps deploy.service', 'npx nps deploy.client'),
      service: 'npx serverless deploy',
      client: 'npx serverless client deploy',
    },
    destroy: {
      description: 'Destroys the lambda micro UI',
      default: series('npx nps destroy.service', 'npx nps destroy.client'),
      service: 'npx serverless remove',
      client: 'npx serverless client remove',
    },
    clean: {
      description: 'Deletes the various generated folders',
      script: series(rimraf('./.lambda'), rimraf('./.microui')),
    },
  },
};
