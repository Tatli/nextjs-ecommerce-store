'use client';
import { useState } from 'react';
import { setProductQuantity } from './actions';

export default function ProductQuantity(props) {
  const [quantity, setQuantity] = useState(1);
  console.log('typeof quantity', typeof quantity, quantity);
  // get the cookie called 'cart' save in cartCookie
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
          await setProductQuantity(props.productId, quantity, props.cookieData);
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
