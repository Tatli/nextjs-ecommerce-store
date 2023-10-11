export async function getProductsInCart(cartCookieJson, productsFromDatabase) {
  try {
    // Get product info depending on which product is in cart´
    const productsInCart = await cartCookieJson
      .map((cartItem) => {
        const productFromDatabase = productsFromDatabase.find(
          (databaseProduct) =>
            Number(databaseProduct.id) === Number(cartItem.id),
        );
        if (!productFromDatabase) {
          return null;
        }
        const quantity = parseInt(cartItem.quantity);
        const subtotal = (
          parseFloat(productFromDatabase.price) * quantity
        ).toFixed(2);

        return {
          id: productFromDatabase.id,
          name: productFromDatabase.name,
          price: productFromDatabase.price,
          quantity: quantity,
          total: parseFloat(subtotal),
        };
      })
      .filter(Boolean);

    // console.log('cartProductsWithQuantity', cartProductsWithQuantity);
    return productsInCart;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function setProductQuantityInCart(
  productId,
  quantity,
  cookieData,
) {
  // find the item(object) whose quantity is to be updated in the Array
  const itemInCart = await cookieData.find((item) => {
    return item.id === productId;
  });

  // Convert the quantity inside of the matched item to an integer/number
  if (itemInCart) {
    const updatedQuantity = itemInCart.quantity + quantity;
    itemInCart.quantity = updatedQuantity;
  } else {
    cookieData.push({
      id: productId,
      quantity: quantity,
    });
  }

  return cookieData;
}
