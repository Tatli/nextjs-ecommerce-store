import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
// import { getAllProductsFromDatabase } from '../../database/connect';
import { getProducts } from '../../database/products';
import styles from '../page.module.scss';

export const metadata: Metadata = {
  title: 'Products',
};

export default async function ProductsPage() {
  // Get all Products from Database
  const products = await getProducts();
  return (
    <main className={styles.main}>
      <h1>Our Products:</h1>
      {/* Map products to display them */}
      {products.map((product) => {
        return (
          <div key={`product-div-${product.id}`}>
            <Link
              data-test-id={`product-${product.id}`}
              href={`/products/${product.id}`}
            >
              {product.name}
              <Image
                src={`/images/${product.name}.avif`}
                alt={product.name}
                width={200}
                height={200}
                unoptimized
              />
            </Link>
          </div>
        );
      })}
    </main>
  );
}
