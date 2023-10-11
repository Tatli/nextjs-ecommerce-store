import { expect, test } from '@jest/globals';
import { getProductsInCart } from '../../util/functions';

test('Test getProductsInCart. Retrieve Data from Cart and Database, then combine them.', async () => {
  const cartObjects = [
    {
      id: 1,
      quantity: 1,
    },
    {
      id: 2,
      quantity: 10,
    },
  ];
  const databaseObjects = [
    {
      id: 1,
      name: 'test1',
      price: 9.99,
      description: 'description1',
    },
    {
      id: 2,
      name: 'test2',
      price: 19.99,
      description: 'description2',
    },
  ];

  expect(await getProductsInCart(cartObjects, databaseObjects)).toStrictEqual([
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
