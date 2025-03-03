import { Elysia } from 'elysia';
import { routes } from './routers';
import { config } from './configs/env.config';
import dotenv from 'dotenv';

dotenv.config();

if (!config.port) {
  throw new Error('PORT is not defined');
}

const app = new Elysia()
  .use(routes)
  .get('/', () => 'Hello World')
  .listen(config.port || 3000);

console.log(`🚀 Gateway API running at http://localhost:${config.port}`);
