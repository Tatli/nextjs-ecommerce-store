import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export function getCookieAsObject() {
  // Get products in cart
  const productsInCart = getCookie(`cart`);

  return !productsInCart ? [] : parseJson(productsInCart);
}

export async function getProductsInCart(cartCookieJson, productsFromDatabase) {
  console.log('cartCookieJson inside CartTotal.js: ', cartCookieJson);
  console.log(
    'productsFromDatabase inside CartTotal.js: ',
    productsFromDatabase,
  );
  try {
    // // Get products in cart
    // const cartCookieJson = getCookieAsObject();
    // // Get products in database
    // const productsFromDatabase = await getProducts();

    // Get product info depending on which product is in cart´
    const productsInCart = await cartCookieJson
      .map((cartItem, index) => {
        console.log(`Hi from inside .map # ${index}`);
        console.log(`cartCookieJson inside .map # ${index}: `, cartCookieJson);
        console.log(
          `productsFromDatabase inside .map # ${index}: `,
          productsFromDatabase,
        );

        const productFromDatabase = productsFromDatabase.find(
          (databaseProduct) =>
            Number(databaseProduct.id) === Number(cartItem.id),
        );
        if (!productFromDatabase) {
          return null;
        }
        console.log('Hi from deeper inside .map');
        const quantity = parseInt(cartItem.quantity);
        const subtotal = parseFloat(productFromDatabase.price) * quantity;

        return {
          id: productFromDatabase.id,
          name: productFromDatabase.name,
          price: productFromDatabase.price,
          quantity: quantity,
          total: subtotal,
        };
      })
      .filter(Boolean);

    // console.log('cartProductsWithQuantity', cartProductsWithQuantity);
    return productsInCart;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export default async function CartTotal() {
  // Get products in cart
  const cartCookieJson = await getCookieAsObject();
  console.log('cartCookieJson inside Cart.js: ', cartCookieJson);

  // Get products in database
  const productsFromDatabase = await getProducts();
  console.log('productsFromDatabase inside Cart.js: ', productsFromDatabase);

  const productsInCart = await getProductsInCart(
    cartCookieJson,
    productsFromDatabase,
  );

  let cartTotal = 0;

  productsInCart.forEach((p) => {
    cartTotal += p.price * p.quantity;
  });

  return (
    <span data-test-id="cart-total">Cart Total: {cartTotal.toFixed(2)}</span>
  );
}
