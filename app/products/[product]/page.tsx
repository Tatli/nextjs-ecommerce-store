import Image from 'next/image';
import ProductForm from './ProductForm';

export default function ProductPage(props: Object) {
  console.log('ProductPage props: ', props);

  return (
    <div>
      <div>This is a single product page</div>
      <ProductForm />
      {/* <Image
        src={`/images/${props.name}.jpg` alt=`${props.name}` width=400 height=400}
      /> */}
    </div>
  );
}
