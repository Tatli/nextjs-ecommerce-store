import { cookies } from 'next/headers';

export function getCookie(name) {
  // nullish coalescing oparator
  return cookies.get(name)?.value;
}
