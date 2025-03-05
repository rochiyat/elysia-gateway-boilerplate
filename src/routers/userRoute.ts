import { Elysia, error } from 'elysia';
import {
  getUsers,
  getUserById,
  updateUser,
  createUser,
} from '../controllers/userController';
import { UserSchema, type UserType } from '../middleware/userMiddleware';
import { formatErrors } from '../middleware/index';
export const userRoutes = new Elysia();
userRoutes.get('/users', async () => {
  return getUsers();
});
userRoutes.get('/users/:id', async ({ params }) => {
  return getUserById(Number(params.id));
});
userRoutes.put('/users/:id', async ({ params, body }) => {
  return updateUser(Number(params.id), body);
});
userRoutes.post(
  '/users',
  ({ body }: { body: UserType }) => {
    return createUser(body);
  },
  {
    body: UserSchema,
    error({ code, error }) {
      if (code === 'VALIDATION') {
        return {
          status: 400,
          message: 'Validation failed',
          errors: formatErrors(error.all),
        };
      }
      return { status: 500, message: 'Internal Server Error' };
    },
  }
);

export default userRoutes;
