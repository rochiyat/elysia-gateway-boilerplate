import { Elysia } from 'elysia';
import { userRoutes } from './userRoute';
import { authRoutes, authMiddleware } from '../auth/auth';

export const routes = [userRoutes, authRoutes];

export const app = new Elysia().use(authMiddleware).use(routes);

export default app;
