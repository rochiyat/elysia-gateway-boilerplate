import { Elysia, t } from 'elysia';
import { SignJWT } from 'jose';
import { Buffer } from 'buffer';

const SECRET_KEY = Buffer.from('your-secret-key', 'utf-8');

const authRoutes = new Elysia().post(
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

export { authRoutes };
