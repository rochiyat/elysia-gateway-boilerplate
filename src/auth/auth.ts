import { Elysia, t, type Context } from 'elysia';
import { jwtVerify, SignJWT, type JWTPayload } from 'jose';
import { Buffer } from 'buffer';

const SECRET_KEY = Buffer.from('your-secret-key', 'utf-8');

export const authRoutes = new Elysia().post(
  '/login',
  async ({ body }) => {
    if (body.username !== 'admin' || body.password !== 'password') {
      return { error: 'Invalid username or password' };
    }

    const token = await new SignJWT({ username: 'admin' })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1h')
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

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      set.status = 401;
      return { user: null, error: 'Token tidak ditemukan atau tidak valid' };
    }

    const token = authHeader.split(' ')[1];

    try {
      const { payload } = await jwtVerify(token, SECRET_KEY);
      return { user: payload as JWTPayload, error: null }; // Simpan payload user
    } catch (error) {
      set.status = 403;
      return { user: null, error: (error as Error).message };
    }
  });
