import { config } from '../configs/env.config';

export async function getUsers() {
  const response = await fetch(`${config.userServiceUrl}`);
  return response.json();
}
