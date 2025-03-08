import { Elysia, t, type Context } from 'elysia';
import { jwtVerify, SignJWT, type JWTPayload } from 'jose';
import { Buffer } from 'buffer';
import { config } from '../configs/env.config';
import { getUserByUsername } from '../services/userService';
import debug from 'debug';

const SECRET_KEY = Buffer.from(config.jwtSecret || '', 'utf-8');

const log = debug('app:authMiddleware');

export const authRoutes = new Elysia().post(
  '/login',
  async ({ body }) => {
    const { username, password } = body;
    const user = await getUserByUsername(username);
    if (user.username !== username || user.password !== password) {
      return { error: 'Invalid username or password' };
    }

    const token = await new SignJWT({ username: user.username })
      .setProtectedHeader({ alg: config.jwtAlgorithm || 'HS256' })
      .setExpirationTime(config.jwtExpirationTime || '1h')
      .sign(SECRET_KEY);

    return { token };
  },
  {
    body: t.Object({
      username: t.String(),
      password: t.String(),
    }),
  }
);

export const authMiddleware = (app: Elysia) =>
  app.derive(async ({ headers, set }: Context) => {
    const authHeader = headers.authorization;
    log('headers', headers);
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      set.status = 401;
      log('authHeader', authHeader);
      return { user: null, error: 'Token tidak ditemukan atau tidak valid' };
    }

    log('token', authHeader);
    const token = authHeader.split(' ')[1];

    try {
      const { payload } = await jwtVerify(token, SECRET_KEY);
      return { user: payload as JWTPayload, error: null };
    } catch (error) {
      set.status = 403;
      return { user: null, error: (error as Error).message };
    }
  });

export const authHeader = async (ctx: Context) => {
  const authHeader = ctx.headers.authorization;
  log('headers', ctx.headers);
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    ctx.set.status = 401;
    log('authHeader', authHeader);
    return { user: null, error: 'Token tidak ditemukan atau tidak valid' };
  }

  log('token', authHeader);
  const token = authHeader.split(' ')[1];

  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);
    return { user: payload as JWTPayload, error: null };
  } catch (error) {
    ctx.set.status = 403;
    return { user: null, error: (error as Error).message };
  }
};
