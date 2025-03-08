import { Elysia } from 'elysia';
import { userRoutes } from './userRoute';
import { authRoutes } from '../auth/auth';

export const routes = [userRoutes, authRoutes];

export const app = new Elysia().use(routes);

export default app;
