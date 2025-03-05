export const formatErrors = (errors: any) => {
  return errors.map((error: any) => ({
    field: error.path.replace('/', ''),
    message: error.message,
  }));
};

export const returnBadRequest = (errors: any) => {
  return {
    status: 400,
    message: 'Validation failed',
    errors: formatErrors(errors),
  };
};

export const returnInternalServerError = () => {
  return {
    status: 500,
    message: 'Internal Server Error',
  };
};
