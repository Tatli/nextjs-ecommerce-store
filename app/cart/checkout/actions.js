'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function deleteCookie() {
  await cookies().delete('cart');
  redirect('/cart/checkout/thankyou');
}
