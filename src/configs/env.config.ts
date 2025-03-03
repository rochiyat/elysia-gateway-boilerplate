import dotenv from 'dotenv';

dotenv.config();

export const devConfig = {
  port: process.env.DEV_PORT,
  userServiceUrl: process.env.DEV_USER_SERVICE_URL,
  productServiceUrl: process.env.DEV_PRODUCT_SERVICE_URL,
  orderServiceUrl: process.env.DEV_ORDER_SERVICE_URL,
};

export const prodConfig = {
  port: process.env.PROD_PORT,
  userServiceUrl: process.env.PROD_USER_SERVICE_URL,
  productServiceUrl: process.env.PROD_PRODUCT_SERVICE_URL,
  orderServiceUrl: process.env.PROD_ORDER_SERVICE_URL,
};

export const config =
  process.env.NODE_ENV === 'development' ? devConfig : prodConfig;

export default config;
