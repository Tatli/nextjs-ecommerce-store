import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import ProductForm from './ProductForm';

export async function generateMetadata({ params }) {
  const singleProduct = await getProductById(Number(params.productId));
  return {
    title: singleProduct ? singleProduct.name : '',
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
      <ProductForm />
      <Image
        src={`/images/${singleProduct.name}.jpg`}
        alt={singleProduct.name}
        width={400}
        height={400}
      />
      <p>Price: {singleProduct.price}</p>
      <p>Description: {singleProduct.description}</p>
    </div>
  );
}
