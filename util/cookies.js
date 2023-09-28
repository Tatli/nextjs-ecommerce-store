import { cookies } from 'next/headers';

// nullish coalescing oparator
export function getCookie(name) {
  // It's like "binding" smth.
  // If there's something inside of the cookie {name}, return the value
  return cookies().get(name)?.value;
}
