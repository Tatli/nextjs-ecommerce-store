export default function ProductPage(props: object) {
  console.log('ProductPage props: ', props);

  return (
    <div>
      <div>This is a single product page</div>

      {/* <Image
        src={`/images/${props.name}.jpg alt=${props.name} width=400 height=400`}
      /> */}
    </div>
  );
}
