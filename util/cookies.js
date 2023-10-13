import { cookies } from 'next/headers';

// import { parseJson } from './json';

export function getParsedCookie() {
  // get the cookie called 'cart' save in cartCookie
  const cartCookie = cookies().get('cart')?.value;
  console.log('cartCookie inside getParsedCookie before parse:', cartCookie);
  console.log(
    'typeof cartCookie inside getParsedCookie before parse:',
    typeof cartCookie,
  );
  // if no cartCookie make it empty array, otherwise parseJson to make it an array of objects
  return !cartCookie ? [] : JSON.parse(cartCookie);
}
