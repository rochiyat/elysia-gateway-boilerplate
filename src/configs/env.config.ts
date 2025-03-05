import dotenv from 'dotenv';

dotenv.config();

export const devConfig = {
  port: process.env.DEV_PORT,
  userServiceUrl: process.env.DEV_USER_SERVICE_URL,
};

export const prodConfig = {
  port: process.env.PROD_PORT,
  userServiceUrl: process.env.PROD_USER_SERVICE_URL,
};

export const config =
  process.env.NODE_ENV === 'development' ? devConfig : prodConfig;

export default config;
