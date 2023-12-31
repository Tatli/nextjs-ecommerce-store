import { getProducts } from '../../database/products';
import { getProductsInCart } from '../../util/functions';
import styles from '../page.module.scss';
import CartTotal, { getCookieAsObject } from './CartTotal';
import ChangeQuantity from './ChangeQuantity';
import RedirectToCheckout from './RedirectToCheckout';
import RemoveProduct from './RemoveProduct';

// import { RemoveProduct } from './RemoveProduct';

// import ProductsInCart from './ProductsInCart';

export const metadata = {
  title: 'Cart',
  description: 'All products inside of your cart.',
};

export default async function Cart() {
  // Get products in cart
  const cartCookieJson = await getCookieAsObject();
  // console.log('cartCookieJson inside Cart.js: ', cartCookieJson);

  // Get products in database
  const productsFromDatabase = await getProducts();
  // console.log('productsFromDatabase inside Cart.js: ', productsFromDatabase);

  const productsInCart = await getProductsInCart(
    cartCookieJson,
    productsFromDatabase,
  );

  return (
    <main className={styles.singleProduct}>
      <h1>Cart:</h1>
      <h2>Products in Cart:</h2>
      <ul>
        {productsInCart.map((product) => {
          const productId = Number(product.id);
          const price = Number(product.price);
          const quantity = Number(product.quantity);
          const subtotal = quantity * price;

          if (product.quantity > 0) {
            return (
              <li
                key={`product-${productId}`}
                data-test-id={`cart-product-${productId}`}
              >
                <span>{product.name}</span>
                <br />
                <span>Quantity: </span>
                <span data-test-id={`cart-product-quantity-${productId}`}>
                  {quantity}
                </span>
                <ChangeQuantity productId={productId} />

                {/* Show Subtotal */}
                <span>Subtotal: </span>
                <span>{subtotal.toFixed(2)}</span>
                <br />
                {/* <RemoveProduct props={parsedItemId} /> */}
                <RemoveProduct productId={productId} />
                <br />
              </li>
            );
          }
          return void 0;
        })}
      </ul>
      <CartTotal />
      <RedirectToCheckout />
    </main>
  );
}
