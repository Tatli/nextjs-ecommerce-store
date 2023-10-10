'use client';
import { useState } from 'react';
import { setProductQuantityInCart } from './actions';

export default function ProductQuantity(props) {
  const [quantity, setQuantity] = useState(1);
  console.log('typeof quantity', typeof quantity, quantity);

  return (
    <form>
      <label>
        Quantity:
        <input
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          data-test-id="product-quantity"
          type="number"
          min="1"
        />
      </label>
      <button
        formAction={async () => {
          await setProductQuantityInCart(props.productId, quantity);
          console.log('typeof quantity', typeof quantity, quantity);
          // await updateProductQuantityCookie(quantity, props.productId);
          // await updateCartCookie(quantity);
        }}
        data-test-id="product-add-to-cart"
      >
        Add to cart
      </button>
    </form>
  );
}
