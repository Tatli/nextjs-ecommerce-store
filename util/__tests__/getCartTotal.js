import { expect, test } from '@jest/globals';
import { getCartTotal } from '../functions';

test('Test getCartTotal. Calculate Cart Total', async () => {
  const cart = [
    {
      id: 1,
      quantity: 1,
      price: 10,
    },
    {
      id: 2,
      quantity: 10,
      price: 10,
    },
  ];

  expect(await getCartTotal(cart)).toStrictEqual(110);
});
