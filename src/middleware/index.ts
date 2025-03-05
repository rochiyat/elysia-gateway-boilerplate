import { Elysia } from 'elysia';

// Fungsi untuk memformat error validasi
const formatErrors = (error: any) => {
  if (!error || !Array.isArray(error.errors)) {
    return [{ field: 'unknown', message: error.message || 'Validation error' }];
  }

  return error.errors.map((err: any) => ({
    field: err.path ? err.path.replace('/', '') : 'unknown',
    message: err.message || `Invalid value for ${err.path}`,
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
