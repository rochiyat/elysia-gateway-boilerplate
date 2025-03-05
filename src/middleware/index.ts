import { Elysia } from 'elysia';

export const formatErrors = (errors: any) => {
  return errors.map((error: any) => ({
    field: error.path.replace('/', ''),
    message: error.message,
  }));
};

export const errorHandler = new Elysia().onError(({ code, error }) => {
  if (code === 'VALIDATION') {
    return {
      status: 400,
      message: 'Validation failed',
      errors: formatErrors(error),
    };
  }

  return { status: 500, message: 'Internal Server Error' };
});
