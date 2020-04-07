import path from 'path';
import { ProfileProgress, ProfileRegister } from './Components';
import createLambda from '@sackrin/react-micro-ui/lib/createLambda';

exports.handler = async (event, context) => {
  // Retrieve the local config
  const microUIConfig = require(path.join(process.cwd(), 'microui.config.js'));
  // Create the Lambda
  const { route, strap, boot } = createLambda(event, context, {
    profile: process.env.PROFILE || 'local',
    config: microUIConfig,
  });
  // SERVER SIDE RENDERED COMPONENTS
  // Strap in the front end components
  strap('ProfileProgress', ProfileProgress);
  strap('ProfileRegister', ProfileRegister);
  // Boot and handle the response
  return boot(event, context);
};
