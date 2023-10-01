-- Doesn't have to run, it's just here to keep track of our SQL files (basically a SQL collection)

-- Create products table

CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  price decimal(8,2) NOT NULL,
  rating int
);

-- Insert into products

INSERT INTO products (name, price, rating)
VALUES ('One', 49.99, 4), ('Two', 39.99, 5);
