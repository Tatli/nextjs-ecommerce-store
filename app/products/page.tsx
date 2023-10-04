import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
// import { getAllProductsFromDatabase } from '../../database/connect';
import { getProducts } from '../../database/products';

export const metadata: Metadata = {
  title: 'Products',
};

export default async function ProductsPage() {
  // Get all Products from Database and log them to console
  const products = await getProducts();
  console.log('Check', products);

  return (
    <div>
      <h1>Our Products:</h1>
      {products.map((product) => {
        return (
          <div key={`product-div-${product.id}`}>
            <Link
              data-test-id={`product-${product.id}`}
              href={`/products/${product.id}`}
            >
              {product.name}
              <Image
                src={`/images/${product.name}.jpg`}
                alt={product.name}
                width={200}
                height={200}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
