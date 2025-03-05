import { $fetch } from 'ofetch';
import { config } from '../configs/env.config';

export async function getUsers() {
  const response = await $fetch(`${config.userServiceUrl}/users`);
  return response;
}

export async function getUserById(id: number) {
  const response = await $fetch(`${config.userServiceUrl}/users/${id}`);
  return response;
}

export async function createUser(user: any) {
  console.log('user', user);
  const response = await $fetch(`${config.userServiceUrl}/users`, {
    method: 'POST',
    body: user,
  });
  return response;
}

export async function updateUser(id: number, user: any) {
  const response = await $fetch(`${config.userServiceUrl}/users/${id}`, {
    method: 'PUT',
    body: user,
  });
  return response;
}
