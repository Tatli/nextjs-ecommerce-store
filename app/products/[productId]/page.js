import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import { getParsedCookie } from '../../../util/cookies';
import styles from '../../page.module.scss';
import ProductQuantity from './ProductQuantity';

export async function generateMetadata({ params }) {
  const singleProduct = await getProductById(Number(params.productId));
  return {
    title: singleProduct ? `Product Details: ${singleProduct.name}` : '',
  };
}
export default async function ProductPage(props) {
  const singleProduct = await getProductById(Number(props.params.productId));
  const cookieData = await getParsedCookie();
  // const singleProduct = await getProductById(Number(props.params.productId));
  // console.log(singleProduct);
  // console.log(props);

  if (!singleProduct) {
    return notFound();
  }
  return (
    <main className={styles.main}>
      <div>This is a single product page</div>
      <h1>{singleProduct.name}</h1>
      <Image
        src={`/images/${singleProduct.name}.avif`}
        alt={singleProduct.name}
        width={400}
        height={400}
        data-test-id="product-image"
      />
      <br />
      <span>Price:</span>{' '}
      <span data-test-id="product-price">{singleProduct.price}</span>
      <br />
      <span>Description: {singleProduct.description}</span>
      <br />
      <ProductQuantity
        productId={props.params.productId}
        cookieData={cookieData}
      />
    </main>
  );
}
