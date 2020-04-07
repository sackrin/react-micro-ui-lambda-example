import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { mockLambdaServer } from '@sackrin/react-micro-ui/lib/Lambda/Mock';
import { handler } from './lambda';

// Create a mock lambda server
// This will use your lambda handler and express to roughly simulate an AWS API gateway
const { boot, server } = mockLambdaServer(handler);
// Boot the mock API server on port 9000
boot(9000);
