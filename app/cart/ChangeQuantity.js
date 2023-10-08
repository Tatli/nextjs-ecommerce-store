'use client';
import { addOne, subtractOne } from './actions';

export default function ChangeQuantity(props) {
  return (
    <form>
      <button formAction={() => addOne(props.productId)}>Add</button>
      <button formAction={() => subtractOne(props.productId)}>Subtract</button>
    </form>
  );
}
