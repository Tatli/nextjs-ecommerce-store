'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function deleteCookie() {
  cookies().delete('cart');
  await redirect('/cart/checkout/thankyou');
}
