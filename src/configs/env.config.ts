import dotenv from 'dotenv';

dotenv.config();

export const devConfig = {
  port: Number(dotenv.config().parsed?.DEV_PORT),
  userServiceUrl: dotenv.config().parsed?.DEV_USER_SERVICE_URL,
};

export const prodConfig = {
  port: Number(dotenv.config().parsed?.PROD_PORT),
  userServiceUrl: dotenv.config().parsed?.PROD_USER_SERVICE_URL,
};

export const config =
  dotenv.config().parsed?.NODE_ENV === 'development' ? devConfig : prodConfig;

export default config;
