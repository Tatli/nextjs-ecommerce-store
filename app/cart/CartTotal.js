import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export function getCookieAsObject() {
  // Get products in cart
  const productsInCart = getCookie(`cart`);

  return !productsInCart ? [] : parseJson(productsInCart);
}

export async function getProductsInCart() {
  try {
    // Get products in cart
    const cartCookieJson = getCookieAsObject();
    // Get products in database
    const productsFromDatabase = await getProducts();

    // Get product info depending on which product is in cart´
    const productsInCart = cartCookieJson
      .map((cartItem) => {
        const productId = parseInt(cartItem.id);
        const product = productsFromDatabase.find(
          (product) => product.id === productId,
        );
        if (!product) {
          return null;
        }

        const quantity = parseInt(cartItem.quantity);
        const subtotal = parseFloat(product.price) * quantity;

        return {
          id: product.id,
          name: product.name,
          price: product.price,
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
  const productsInCart = await getProductsInCart();

  let cartTotal = 0;

  productsInCart.forEach((p) => {
    cartTotal += p.price * p.quantity;
  });

  return (
    <span data-test-id="cart-total">Cart Total: {cartTotal.toFixed(2)}</span>
  );
}
