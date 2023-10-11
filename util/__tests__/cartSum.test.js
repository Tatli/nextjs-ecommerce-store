import { expect, test } from '@jest/globals';
import { getCartSum } from '../../util/functions';

test('Test getCartSum. Calculate Cart Total', async () => {
  const cartObjects = [
    {
      id: 1,
      quantity: 1,
      price: 9.99,
    },
    {
      id: 2,
      quantity: 10,
      price: 1,
    },
  ];

  expect(await getCartSum(cart)).toStrictEqual([
    {
      id: 1,
      name: 'test1',
      price: 9.99,
      quantity: 1,
      total: 9.99,
    },
    {
      id: 2,
      name: 'test2',
      price: 19.99,
      quantity: 10,
      total: 199.9,
    },
  ]);
});
