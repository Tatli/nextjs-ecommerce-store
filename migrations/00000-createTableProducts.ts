import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string | null;
};

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE products(
     id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
     name varchar(40) NOT NULL,
     price decimal(8,2) NOT NULL,
     description varchar(100)
    );`;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE products`;
}
