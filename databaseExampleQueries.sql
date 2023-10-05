-- Doesn't have to run, it's just here to keep track of our SQL files (basically a SQL collection)
-- nextjs_ecommerce_store

-- Create products table
CREATE TABLE PRODUCTS(
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 name varchar(40) NOT NULL,
 price decimal(8,2) NOT NULL,
 description varchar(100)
);



-- Insert into products
INSERT INTO products
(name, price, description)
VALUES
('Website', 499, 'We create your Websites wireframe and hand it to you'),
('Website incl Text', 999, 'We create your Website and write the Website text for you, based on your input'),
('Website incl Text and SEO', 1999, 'We create your Website, the text, and Search Machine Optimization'),
('99GB Webspace (monthly)', 39, 'Your Website will be hosted on our shared host server');

-- Read all products (R in CRUD - Read)
SELECT * from products;
