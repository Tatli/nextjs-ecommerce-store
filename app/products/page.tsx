import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProductsFromDatabase } from '../../database/connect';
import { getProducts } from '../../database/products';

export const metadata: Metadata = {
  title: 'Animals page',
};

export default function ProductsPage() {
  const products = getProducts();
  console.log(
    getAllProductsFromDatabase().then((product) => console.log(product)),
  );
  return (
    <div>
      <h1>Product overview:</h1>
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
