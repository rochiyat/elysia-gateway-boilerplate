import { Elysia, t } from 'elysia';
import { SignJWT } from 'jose';
import { Buffer } from 'buffer';

// Secret Key untuk JWT
const SECRET_KEY = Buffer.from('your-secret-key', 'utf-8');

// Endpoint untuk login dan mendapatkan token
const authRoutes = new Elysia().post(
  '/login',
  async ({ body }) => {
    // Dummy user, bisa diganti dengan DB check
    if (body.username !== 'admin' || body.password !== 'password') {
      return { error: 'Username atau password salah' };
    }

    // Buat token JWT
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
