import type { Static } from 'elysia';
import { Type } from '@sinclair/typebox';

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
});

export const UserUpdateSchema = Type.Object({
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
export type UserUpdateType = Static<typeof UserUpdateSchema>;
