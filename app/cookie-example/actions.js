'use server';

import { cookies } from 'next/headers';

// Actions ARE ALWAYS ASYNC and to be AWAITED WHERE THEY ARE USED
export async function createCookie(value) {
  // .set() -> name of the cookie
  // Parameter [1] -> value to be set to
  // Set value of cookie 'testCookie' to {value}
  // Action has to be awaited
  await cookies().set('testCookie', value);
}
