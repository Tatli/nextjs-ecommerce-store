import { cookies } from 'next/headers';
import { parseJson } from './json';

export function getParsedCookie() {
  // get the cookie called 'cart' save in cartCookie
  const cartCookie = cookies().get('cart');

  // if no cartCookie make it empty array, otherwise parseJson to make it an array of objects
  return !cartCookie ? [] : parseJson(cartCookie.value);
}
