import { z } from 'zod';
import type { Context, Static } from 'elysia';
import { Type } from '@sinclair/typebox';

export const updateUserSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters' }),
  password: z
    .string()
    .min(3, { message: 'Password must be at least 3 characters' }),
  firstName: z
    .string()
    .min(3, { message: 'First name must be at least 3 characters' }),
  lastName: z
    .string()
    .min(3, { message: 'Last name must be at least 3 characters' }),
  ssn: z.string().min(3, { message: 'SSN must be at least 3 characters' }),
  dob: z.number(),
  hiredOn: z.number(),
  terminatedOn: z.number(),
  department: z
    .string()
    .min(3, { message: 'Department must be at least 3 characters' }),
  gender: z
    .string()
    .min(3, { message: 'Gender must be at least 3 characters' }),
  portrait: z
    .string()
    .min(3, { message: 'Portrait must be at least 3 characters' }),
  thumbnail: z
    .string()
    .min(3, { message: 'Thumbnail must be at least 3 characters' }),
  id: z.string().min(3, { message: 'Id must be at least 3 characters' }),
});

export const userSchema = z.object({
  username: z
    .string()
    .nonempty({ message: 'Username is required' })
    .min(3, { message: 'Username must be at least 3 characters' }),
  password: z
    .string()
    .nonempty({ message: 'Password is required' })
    .min(3, { message: 'Password must be at least 3 characters' }),
  firstName: z
    .string()
    .nonempty({ message: 'First name is required' })
    .min(3, { message: 'First name must be at least 3 characters' }),
  lastName: z
    .string()
    .nonempty({ message: 'Last name is required' })
    .min(3, { message: 'Last name must be at least 3 characters' }),
  ssn: z
    .string()
    .nonempty({ message: 'SSN is required' })
    .min(3, { message: 'SSN must be at least 3 characters' }),
  dob: z.date(),
  hiredOn: z.date(),
  terminatedOn: z.date(),
  department: z
    .string()
    .nonempty({ message: 'Department is required' })
    .min(3, { message: 'Department must be at least 3 characters' }),
  gender: z
    .string()
    .nonempty({ message: 'Gender is required' })
    .min(3, { message: 'Gender must be at least 3 characters' }),
  portrait: z
    .string()
    .nonempty({ message: 'Portrait is required' })
    .min(3, { message: 'Portrait must be at least 3 characters' }),
  thumbnail: z
    .string()
    .nonempty({ message: 'Thumbnail is required' })
    .min(3, { message: 'Thumbnail must be at least 3 characters' }),
  id: z
    .string()
    .nonempty({ message: 'Id is required' })
    .min(3, { message: 'Id must be at least 3 characters' }),
});

export const UserSchema = Type.Object({
  username: Type.String({ minLength: 3, maxLength: 50 }),
  password: Type.String({ minLength: 3, maxLength: 50 }),
  firstName: Type.String({ minLength: 3, maxLength: 50 }),
  lastName: Type.String({ minLength: 3, maxLength: 50 }),
  ssn: Type.String({ minLength: 3, maxLength: 50 }),
  dob: Type.Number(),
  hiredOn: Type.Number(),
  terminatedOn: Type.Number(),
  department: Type.String({ minLength: 3, maxLength: 50 }),
  gender: Type.String({ minLength: 3, maxLength: 50 }),
  portrait: Type.String({ minLength: 3, maxLength: 50 }),
  thumbnail: Type.String({ minLength: 3, maxLength: 50 }),
  id: Type.String({ required: true }),
});

export type UserType = Static<typeof UserSchema>;

export const validateCreateUser = ({ body, set }: Context) => {
  console.log('body', body);
  const result = userSchema.safeParse(body);
  console.log('result', result);
  if (!result.success) {
    set.status = 400;
    return { error: result.error.errors.map((err) => err.message) };
  }
  return result.data;
};
