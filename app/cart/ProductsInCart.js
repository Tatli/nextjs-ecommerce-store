import React from 'react';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

// Get all products from database
const productsFromDatabase = await getProducts();

// Get products in cart
const productsInCart = await getCookie(`cart`);

// Convert Cookie from String -> JSON
const productsInCartJson = parseJson(productsInCart);

// Filter products from Database to products in Cart
const filteredProducts = productsFromDatabase.filter((product) => {
  product.id === productsInCartJson.id;
});

export default function ProductsInCart() {
  return (
    <div>
      <h1>Products in Cart:</h1>
      <ul>
        {filteredProducts.map((product) => {
          productsInCartJson.id === product.id;
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
