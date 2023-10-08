import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from '../page.module.scss';
import CartTotal from './CartTotal';
import ChangeQuantity from './ChangeQuantity';
import RedirectToCheckout from './RedirectToCheckout';
import RemoveProduct from './RemoveProduct';

// import { RemoveProduct } from './RemoveProduct';

// import ProductsInCart from './ProductsInCart';

export const metadata = {
  title: 'Cart',
};

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

export default async function Cart() {
  const productsInCart = await getProductsInCart();

  return (
    <main className={styles.main}>
      <h1>Cart:</h1>
      <h1>Products in Cart:</h1>
      <ul>
        {productsInCart.map((product) => {
          const productId = Number(product.id);
          const price = Number(product.price);
          const quantity = product.quantity;
          const subtotal = quantity * price;
          console.log('quantity', typeof quantity);
          console.log('price', typeof price);
          console.log('subtotal', typeof subtotal);
          console.log('cartTotal', typeof cartTotal);

          if (product.quantity > 0) {
            return (
              <li
                key={`product-${productId}`}
                data-test-id={`cart-product-${productId}`}
              >
                <span>{product.name}</span>
                <br />
                <span data-test-id={`cart-product-quantity-${productId}`}>
                  {`Quantity: ${quantity}`}
                  <ChangeQuantity productId={productId} />
                  {/* {console.log('productId inside page.js', productId)} */}
                </span>
                <br />
                {/* Show Subtotal */}
                <span>{`Subtotal: ${subtotal.toFixed(2)}`}</span>
                <br />
                {/* <RemoveProduct props={parsedItemId} /> */}
                <RemoveProduct productId={productId} />
              </li>
            );
          }
        })}
      </ul>
      <CartTotal />
      <RedirectToCheckout />
    </main>
  );
}
