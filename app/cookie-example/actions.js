'use server';

import { cookies } from 'next/headers';

<<<<<<< HEAD
// Actions ARE ALWAYS ASYNC and to be AWAITED WHERE THEY ARE USED
export async function createCookie(value) {
  // .set() -> name of the cookie
  // Parameter [1] -> value to be set to
  // Set value of cookie 'testCookie' to {value}
  // Action has to be awaited
=======
export async function createCookie(value) {
>>>>>>> f93a6707ca86d859caae8d81ac069cd9aee3b68b
  await cookies().set('testCookie', value);
}
