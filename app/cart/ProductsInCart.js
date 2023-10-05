import React from 'react';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';

const products = await getProducts();

export default function ProductsInCart() {
  return (
    <div>
      <h1>Products in Cart:</h1>
      <ul>
        {products.map((product) => {
          // Get quantity of single product in cart
          const productQuantityCookie = getCookie(`cart`);
          // Convert quantity Cookie to a number
          const currentQuantity = parseInt(productQuantityCookie) || 0;
          // Calculate subtotal
          const subtotal = currentQuantity * product.price;

          return (
            /* Single Product Container */
            <li
              key={`product-${product.id}`}
              data-test-id={`cart-product-${product.id}`}
            >
              {/* Display Product Name */}
              <span>{product.name}</span>
              <br />
              {/* Product Quantity */}
              <span data-test-id={`cart-product-quantity-${product.id}`}>
                {`Quantity: ${currentQuantity}`}
              </span>
              <br />
              {/* Show Subtotal */}
              <span>{`Subtotal: ${subtotal}`}</span>
              <br />
              {/* Remove Product button */}
              <button data-test-id={`cart-product-remove-${product.id}`}>
                Remove
              </button>
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
