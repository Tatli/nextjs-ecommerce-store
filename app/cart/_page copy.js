import Link from 'next/link';
import { getProductById, getProducts } from '../../database/products';
import { getParsedCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { deleteProduct } from './actions';

// import { RemoveProduct } from './RemoveProduct';

// import ProductsInCart from './ProductsInCart';

export const metadata = {
  title: 'Cart',
};

export function getCookieAsObject() {
  // Get products in cart
  const productsInCart = getParsedCookie();

  return productsInCart;
}

// export async function getProductDetailsByCart() {
//   try {
//     // Get products in cart
//     const cartCookieJson = getCookieAsObject();
//     // Get products in database
//     const productsFromDatabase = await getProducts();

//     // Get product info depending on which product is in cart´
//     const productsInCart = cartCookieJson.map((cartItem) => {
//       const productId = parseInt(cartItem.id);
//       const product = productsFromDatabase.filter(
//         (product) => product.id === productId,
//       );

//       const quantity = parseInt(cartItem.quantity);
//       const subtotal = parseFloat(product.price) * quantity;

//       return {
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         quantity: quantity,
//         total: subtotal,
//       };
//     });

//     // console.log('cartProductsWithQuantity', cartProductsWithQuantity);
//     return productsInCart;
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   }
// }

// // Get all products from database
// const productsFromDatabase = await getProducts();
// // console.log(productsFromDatabase);

export default function Cart() {
  const productsInCartJson = getCookieAsObject();

  return (
    <div>
      <h1>Cart:</h1>
      <h1>Products in Cart:</h1>

      <br />
      <ul>
        {productsInCartJson.map(async (productInsideCart) => {
          // Reassuring that what we get is the correct cart item by printing it's object, id, quantity
          // console.log('product in .map:', productInsideCart);
          // console.log('product.id in .map:', productInsideCart.id);
          // console.log(
          //   'product.quantity in .map:',
          //   productInsideCart.quantity,
          //   '\n',
          // );

          // Get a single product from database
          const singleProductFromDatabase = await getProductById(
            productInsideCart.id,
          );

          // Log product from database
          console.log('singleProductFromDatabase:', singleProductFromDatabase);

          // Calculate subtotal by multiplying quantity of item in cart with item price from database
          const subtotal =
            productInsideCart.quantity * singleProductFromDatabase.price;

          /* Single Product Container */
          return (
            <li
              key={`product-${productInsideCart.id}`}
              data-test-id={`cart-product-${productInsideCart.id}`}
            >
              {/* Display Product Name */}
              <span>{singleProductFromDatabase.name}</span>
              <br />
              {/* Product Quantity */}
              <span
                data-test-id={`cart-product-quantity-${productInsideCart.id}`}
              >
                {`Quantity: ${productInsideCart.quantity}`}
              </span>
              <br />
              {/* Show Subtotal */}
              <span>{`Subtotal: ${subtotal}`}</span>
              <br />
              {/* Remove Product button */}
              {/* <RemoveProduct props={parsedItemId} /> */}
              <form>
                <button
                  // formAction={() => deleteProduct(productInsideCart.id)}
                  data-test-id={`cart-product-remove-${productInsideCart.id}`}
                >
                  Remove
                </button>
              </form>
            </li>
          );
        })}
      </ul>
      <Link href="/checkout">
        <button data-test-id="cart-checkout">Proceed to checkout</button>
      </Link>
    </div>
  );
}
