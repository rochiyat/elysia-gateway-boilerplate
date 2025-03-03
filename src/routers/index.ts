import Elysia from 'elysia';
import { userRoutes } from './userRoute';

export const routes = [userRoutes];

export const app = new Elysia().use(routes);
