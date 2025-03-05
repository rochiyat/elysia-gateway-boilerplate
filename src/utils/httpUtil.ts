import type { Context } from 'elysia';

export function returnSuccess(
  ctx: Context,
  statusCode: number,
  message: string,
  data: any
) {
  const returnResponse = {
    status: 'OK',
    message,
    data,
  };
  return (ctx.set.status = statusCode), returnResponse;
}

export function returnNonSuccess(
  ctx: Context,
  statusCode: number,
  message: string
) {
  return (ctx.set.status = statusCode), { status: 'ERROR', message };
}
