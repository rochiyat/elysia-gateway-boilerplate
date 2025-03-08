import { $fetch } from 'ofetch';
import { config } from '../configs/env.config';

export async function getUsers() {
  const response = await $fetch(`${config.userServiceUrl}/users`);
  return response;
}

export async function getUserById(id: string) {
  const response = await $fetch(`${config.userServiceUrl}/users/${id}`);
  return response;
}

export async function createUser(user: any) {
  const response = await $fetch(`${config.userServiceUrl}/users`, {
    method: 'POST',
    body: user,
  });
  return response;
}

export async function updateUser(id: string, user: any) {
  const response = await $fetch(`${config.userServiceUrl}/users/${id}`, {
    method: 'PUT',
    body: user,
  });
  return response;
}

export async function getUserByUsername(username: string) {
  const response = await getUsers();
  return response.find((user: any) => user.username === username);
}
