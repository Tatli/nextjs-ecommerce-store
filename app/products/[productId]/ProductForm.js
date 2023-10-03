'use client';
import React, { useState } from 'react';

export default function ProductForm() {
  const [amount, setAmount] = useState(1);

  return (
    <label>
      Amount:
      <input
        onChange={(e) => setAmount(e.currentTarget.value)}
        value={amount}
        data-test-id="product-quantity"
        type="number"
      />
    </label>
  );
}
