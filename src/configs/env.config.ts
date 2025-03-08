import dotenv from 'dotenv';

const env = dotenv.config();

export const devConfig = {
  port: Number(env.parsed?.DEV_PORT),
  userServiceUrl: env.parsed?.DEV_USER_SERVICE_URL,
  jwtSecret: env.parsed?.DEV_JWT_SECRET,
  jwtExpirationTime: env.parsed?.DEV_JWT_EXPIRATION_TIME,
  jwtAlgorithm: env.parsed?.DEV_JWT_ALGORITHM,
  jwtIssuer: env.parsed?.DEV_JWT_ISSUER,
  jwtAudience: env.parsed?.DEV_JWT_AUDIENCE,
};

export const prodConfig = {
  port: Number(env.parsed?.PROD_PORT),
  userServiceUrl: env.parsed?.PROD_USER_SERVICE_URL,
  jwtSecret: env.parsed?.PROD_JWT_SECRET,
  jwtExpirationTime: env.parsed?.PROD_JWT_EXPIRATION_TIME,
  jwtAlgorithm: env.parsed?.PROD_JWT_ALGORITHM,
  jwtIssuer: env.parsed?.PROD_JWT_ISSUER,
  jwtAudience: env.parsed?.PROD_JWT_AUDIENCE,
};

export const config =
  env.parsed?.NODE_ENV === 'development' ? devConfig : prodConfig;

export default config;
