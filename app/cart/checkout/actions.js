'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function emptyCartGotoThankYou() {
  await cookies().delete('cart');
  redirect('/cart/checkout/thankyou');
}
