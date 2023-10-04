'use client';
import React, { useState } from 'react';

export default function ProductQuantity() {
  const [amount, setAmount] = useState(1);

  return (
    <label>
      Quantity:
      <input
        onChange={(e) => setAmount(e.currentTarget.value)}
        value={amount}
        data-test-id="product-quantity"
        type="number"
        min="0"
      />
    </label>
  );
}
