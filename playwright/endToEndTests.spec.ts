import test, { expect } from '@playwright/test';

test('Add to cart, change quantity, remove from cart test', async ({
  page,
}) => {
  await page.goto('http://localhost:3000/products');

  // Navigate to Single Product Page
  await page.getByTestId('product-1').click();
  await page.waitForURL('http://localhost:3000/products/1');
  await expect(page).toHaveURL('http://localhost:3000/products/1');

  // Set Quantity of Product
  await page.getByTestId('product-quantity').fill('2');

  // Add Product to Cart
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count')).toHaveText('2');

  // Navigate to Cart
  await page.getByTestId('cart-link').click();
  await page.waitForURL('http://localhost:3000/cart');
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // Remove item from cart
  await page.getByTestId('cart-product-remove-1').click();
  await expect(page.getByTestId('cart-count')).toHaveText('0');
});

test('Checkout flow test', async ({ page }) => {
  // Checkout
  await page.goto('http://localhost:3000/products');

  // Navigate to Single Product Page
  await page.getByTestId('product-1').click();
  await page.waitForURL('http://localhost:3000/products/1');
  await expect(page).toHaveURL('http://localhost:3000/products/1');

  // Set Quantity of Product
  await page.getByTestId('product-quantity').fill('2');

  // Add Product to Cart
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count')).toHaveText('2');

  // Navigate to Cart
  await page.getByTestId('cart-link').click();
  await page.waitForURL('http://localhost:3000/cart');
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // Proceed to Checkout
  await page.getByTestId('cart-checkout').click();
  await page.waitForURL('http://localhost:3000/cart/checkout');
  await expect(page).toHaveURL('http://localhost:3000/cart/checkout');

  // Fill out Payment form
  await page.getByTestId('checkout-first-name').fill('Jennie');
  await page.getByTestId('checkout-last-name').fill('Nichols');
  await page.getByTestId('checkout-email').fill('jennie.nichols@example.com');
  await page.getByTestId('checkout-address').fill('Valwood Pkwy 88');
  await page.getByTestId('checkout-city').fill('Billings');
  await page.getByTestId('checkout-postal-code').fill('63104');
  await page.getByTestId('checkout-country').fill('United States');
  await page.getByTestId('checkout-credit-card').fill('5419484298205592');
  await page.getByTestId('checkout-expiration-date').fill('09/2022');
  await page.getByTestId('checkout-security-code').fill('123');

  // Confirm Order
  await page.getByTestId('checkout-confirm-order').click();
  await page.waitForURL('http://localhost:3000/cart/checkout/thankyou');
  await expect(page).toHaveURL('http://localhost:3000/cart/checkout/thankyou');
  await expect(page).toHaveTitle('Thank you for your order | AccessIT');

  // Verify emptied cart
  await expect(page.getByTestId('cart-count')).toHaveText('0');
});

// // Go to Products page
// await page.getByRole('link', { name: 'Products' }).click();
// await expect(page).toHaveURL('http://localhost:3000/products');
