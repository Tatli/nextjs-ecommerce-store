import { expect, test } from '@jest/globals';
import { getProductsInCart } from '../../app/cart/CartTotal';

test('Test getProductsInCart. Retrieve Data from Cart and Database, then combine them.', () => {
  const cartObjects = [
    {
      id: 1,
      quantity: 1,
    },
    {
      id: 2,
      quantity: 200,
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

  expect(getProductsInCart(cartObjects, databaseObjects)).toStrictEqual([
    {
      id: 1,
      name: 'test1',
      price: 9.99,
      description: 'description1',
      quantity: 1,
    },
    {
      id: 2,
      name: 'test2',
      price: 19.99,
      description: 'description2',
      quantity: 200,
    },
  ]);
});
