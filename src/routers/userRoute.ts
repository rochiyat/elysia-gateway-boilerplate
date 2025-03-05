import { Elysia, error, type Context } from 'elysia';
import {
  getUsers,
  getUserById,
  updateUser,
  createUser,
} from '../controllers/userController';
import { UserSchema, UserUpdateSchema } from '../middleware/userMiddleware';
import {
  returnBadRequest,
  returnInternalServerError,
} from '../utils/helperUtil';

export const userRoutes = new Elysia();

userRoutes.get('/users', async (ctx: Context) => {
  return getUsers(ctx);
});

userRoutes.get('/users/:id', async (ctx: Context) => {
  const { id } = ctx.params;
  return getUserById(ctx, id);
});

userRoutes.put(
  '/users/:id',
  async (ctx: Context) => {
    return updateUser(ctx);
  },
  {
    body: UserUpdateSchema,
    error({ code, error }) {
      if (code === 'VALIDATION') {
        return returnBadRequest(error.all);
      }
      return returnInternalServerError();
    },
  }
);

userRoutes.post(
  '/users',
  async (ctx: Context) => {
    return createUser(ctx);
  },
  {
    body: UserSchema,
    error({ code, error }) {
      if (code === 'VALIDATION') {
        return returnBadRequest(error.all);
      }
      return returnInternalServerError();
    },
  }
);

export default userRoutes;
