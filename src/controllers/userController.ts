import type { Context } from 'elysia';
import {
  createUser as createUserService,
  getUsers as getUsersService,
  getUserById as getUserByIdService,
  updateUser as updateUserService,
} from '../services/userService';
import { returnSuccess, returnNonSuccess } from '../utils/httpUtil';
import type { UserType } from '../middleware/userMiddleware';

export const createUser = async (ctx: Context) => {
  try {
    const { body } = ctx;
    const createdUser = await createUserService(body as unknown as UserType);
    return returnSuccess(ctx, 201, 'User created successfully', createdUser);
  } catch (error: unknown) {
    return returnNonSuccess(ctx, 500, (error as Error).message);
  }
};

export const getUsers = async (ctx: Context) => {
  try {
    const users = await getUsersService();
    return returnSuccess(ctx, 200, 'Users fetched successfully', users);
  } catch (error: unknown) {
    return returnNonSuccess(ctx, 500, (error as Error).message);
  }
};

export const getUserById = async (ctx: Context, id: string) => {
  try {
    const user = await getUserByIdService(id);
    return returnSuccess(ctx, 200, 'User fetched successfully', user);
  } catch (error: unknown) {
    return returnNonSuccess(ctx, 500, (error as Error).message);
  }
};

export const updateUser = async (ctx: Context) => {
  try {
    const { id } = ctx.params;
    const { body } = ctx;
    const updatedUser = await updateUserService(id, body);
    return returnSuccess(ctx, 200, 'User updated successfully', updatedUser);
  } catch (error: unknown) {
    return returnNonSuccess(ctx, 500, (error as Error).message);
  }
};
