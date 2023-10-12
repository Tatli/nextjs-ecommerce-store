import { Sql } from 'postgres';

const products = [
  {
    id: 1,
    name: 'Website',
    price: 499,
    description: 'We create your Websites wireframe and hand it to you',
  },
  {
    id: 2,
    name: 'Website incl Text',
    price: 999,
    description:
      'We create your Website and write the Website text for you, based on your input',
  },
  {
    id: 3,
    name: 'Website incl Text and SEO',
    price: 1999,
    description:
      'We create your Website, the text, and Search Machine Optimization',
  },
  {
    id: 4,
    name: '99GB Webspace (monthly)',
    price: 39,
    description: 'Your Website will be hosted on our shared host server',
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
 INSERT INTO products
 (name, price, description)
 VALUES
 (${product.name}, ${product.price}, ${product.description});`;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
  DELETE FROM products WHERE id = ${product.id}
  `;
  }
}

// INSERT INTO products
// (name, price, description)
// VALUES
// ('Website', 499, 'We create your Websites wireframe and hand it to you'),
// ('Website incl Text', 999, 'We create your Website and write the Website text for you, based on your input'),
// ('Website incl Text and SEO', 1999, 'We create your Website, the text, and Search Machine Optimization'),
// ('99GB Webspace (monthly)', 39, 'Your Website will be hosted on our shared host server')
