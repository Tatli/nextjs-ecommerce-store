import { getProducts } from '../../database/products';
import { getParsedCookie } from '../../util/cookies';
import { getCartTotal, getProductsInCart } from '../../util/functions';

export function getCookieAsObject() {
  // Get products in cart
  const productsInCart = getParsedCookie();

  return productsInCart;
}

// Get products in cart
export default async function CartTotal() {
  const cartCookieJson = await getParsedCookie();
  console.log('cartCookieJson inside Cart.js: ', cartCookieJson);

  // Get products in database
  const productsFromDatabase = await getProducts();
  // console.log('productsFromDatabase inside Cart.js: ', productsFromDatabase);

  const productsInCart = await getProductsInCart(
    cartCookieJson,
    productsFromDatabase,
  );

  const cartTotal = getCartTotal(productsInCart);

  return (
    <>
      <span>Cart Total: </span>
      <span data-test-id="cart-total">{cartTotal.toFixed(2)}</span>
    </>
  );
}
