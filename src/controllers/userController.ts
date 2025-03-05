import {
  createUser as createUserService,
  getUsers as getUsersService,
  getUserById as getUserByIdService,
  updateUser as updateUserService,
} from '../services/userService';

export const createUser = async (user: any) => {
  console.log('user', user);
  try {
    return await createUserService(user);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    return await getUsersService();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUserById = async (id: number) => {
  try {
    return await getUserByIdService(id);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateUser = async (id: number, user: any) => {
  try {
    return await updateUserService(id, user);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
