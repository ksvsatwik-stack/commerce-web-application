CREATE TABLE Products (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2)
);

CREATE TABLE Users (
    id INT PRIMARY KEY,
    username VARCHAR(100),
    password VARCHAR(100),
    role VARCHAR(20)
);

CREATE TABLE Orders (
    id INT PRIMARY KEY,
    customer VARCHAR(100),
    total DECIMAL(10,2)
);
