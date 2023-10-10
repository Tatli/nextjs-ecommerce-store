import styles from '../page.module.scss';
import CartTotal, { getProductsInCart } from './CartTotal';
import ChangeQuantity from './ChangeQuantity';
import RedirectToCheckout from './RedirectToCheckout';
import RemoveProduct from './RemoveProduct';

// import { RemoveProduct } from './RemoveProduct';

// import ProductsInCart from './ProductsInCart';

export const metadata = {
  title: 'Cart',
};

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