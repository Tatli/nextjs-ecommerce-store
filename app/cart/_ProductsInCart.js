import { getProductById } from '../../database/products';
// import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

// import RemoveProduct from './RemoveProduct';

// // // Get all products from database
// const productsFromDatabase = await getProducts();
// // console.log(productsFromDatabase);

// // Get products in cart
// const productsInCart = await getCookie(`cart`);

// // Convert Cookie from String -> JSON
// const productsInCartJson = parseJson(productsInCart);
// console.log(
//   `productsInCartJson:, ${productsInCartJson.map((product) => {
//     console.log(product);
//   })}`,
// );

export function getCookieAsObject() {
  // Get products in cart
  const productsInCart = getCookie(`cart`);

  return !productsInCart ? [] : parseJson(productsInCart);
}

// const singleProductFromDatabase = await getProductById(1);
// console.log(
//   'I am the name of a single product before the return of the component',
//   singleProductFromDatabase.price,
// );

// // Filter products from Database to products in Cart
// const filteredProducts = productsFromDatabase.filter((product) => {
//   // Check if products in cart include a product coming from the database
//   productsInCartJson.includes(product.id);
//   console.log('last line of .filter');
// });

export default function ProductsInCart() {
  const productsInCartJson = getCookieAsObject();
  return (
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
          </li>
        );
      })}
    </ul>
  );
}
