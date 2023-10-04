'use client';
import React, { useState } from 'react';
import { updateCartCookie, updateProductQuantityCookie } from './actions';

export default function ProductQuantity(props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <form>
      <label>
        Quantity:
        <input
          value={quantity}
          onChange={(e) => setQuantity(e.currentTarget.value)}
          data-test-id="product-quantity"
          type="number"
          min="1"
        />
      </label>
      <button
        formAction={async () => {
          await updateProductQuantityCookie(quantity, props.productId);
          await updateCartCookie(quantity);
        }}
        data-test-id="product-add-to-cart"
      >
        Add to cart
      </button>
    </form>
  );
}
