import postgres from 'postgres';

const sql = postgres(
  'postgres://nextjs_ecommerce_store:nextjs_ecommerce_store@localhost/nextjs_ecommerce_store',
);
console.log(
  await sql`
    	SELECT * FROM products;
  `,
);
