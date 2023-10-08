'use client';
import { deleteProduct } from './actions';

export default function RemoveProduct(props) {
  console.log('props', props);
  return (
    <form>
      <button
        formAction={() => deleteProduct(props.productId)}
        data-test-id={`cart-product-remove-${props.productId}`}
      >
        Remove
      </button>
    </form>
  );
}
