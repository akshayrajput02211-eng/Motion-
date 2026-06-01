USE learning_sql;

CREATE TABLE products(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    price DECIMAL(10,2)
);

INSERT INTO products(name, price)
VALUES ('Laptop', 55000);

SELECT * FROM products;