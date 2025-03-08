import { describe, expect, test, beforeAll, afterAll } from 'bun:test';
import { app } from '../../server';
import { $fetch } from 'ofetch';

beforeAll(async () => {
  if (!app.server) {
    await app.listen(3000);
  }
});

afterAll(() => {
  app.stop();
});

describe('ElysiaJS API Integration Test', () => {
  test('GET / should return Hello World', async () => {
    const res = await $fetch('http://localhost:3000/');

    expect(res.status).toBe(200);
    expect(await res.text()).toBe('Hello World');
  });

  test('GET /not-found should return 404', async () => {
    const res = await $fetch('http://localhost:3000/not-found');

    expect(res.status).toBe(404);
  });
});
