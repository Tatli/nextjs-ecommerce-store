const products = [
  { id: 1, name: 'One', price: 30, rating: 4 },
  { id: 2, name: 'Two', price: 50, rating: 3 },
  { id: 3, name: 'Three', price: 90, rating: 2 },
  { id: 4, name: 'Four', price: 150, rating: 1 },
  { id: 5, name: 'Five', price: 250, rating: 5 },
];

export function getProducts() {
  return products;
}

export function getProduct(id: number) {
  return products.find((product) => product.id === id);
}
