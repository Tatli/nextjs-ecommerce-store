import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import ProductQuantity from './ProductQuantity';

export async function generateMetadata({ params }) {
  const singleProduct = await getProductById(Number(params.productId));
  return {
    title: singleProduct ? `Product Details: ${singleProduct.name}` : '',
  };
}
export default async function ProductPage(props) {
  const singleProduct = await getProductById(Number(props.params.productId));
  // const singleProduct = await getProductById(Number(props.params.productId));
  console.log(singleProduct);
  console.log(props);

  if (!singleProduct) {
    return notFound();
  }
  return (
    <div>
      <div>This is a single product page</div>
      <h1>{singleProduct.name}</h1>
      <img
        src={`/images/${singleProduct.name}.jpg`}
        alt={singleProduct.name}
        width={400}
        height={400}
        data-test-id="product-image"
      />
      <span data-test-id="product-price">Price: {singleProduct.price}</span>
      <span>Description: {singleProduct.description}</span>
      <ProductQuantity />
    </div>
  );
}
