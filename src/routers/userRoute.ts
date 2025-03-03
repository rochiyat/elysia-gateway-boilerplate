import { Elysia } from 'elysia';
import { getUsers } from '../services/userService';

export const userRoutes = new Elysia().get('/users', async () => {
  return await getUsers();
});
