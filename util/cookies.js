import { cookies } from 'next/headers';

<<<<<<< HEAD
// nullish coalescing oparator
export function getCookie(name) {
  // It's like "binding" smth.
  // If there's something inside of the cookie {name}, return the value
  return cookies().get(name)?.value;
=======
export function getCookie(name) {
  // nullish coalescing oparator
  return cookies.get(name)?.value;
>>>>>>> f93a6707ca86d859caae8d81ac069cd9aee3b68b
}
