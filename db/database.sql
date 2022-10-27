CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employees (
    id INT(15) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) DEFAULT NULL,
    salary  INT(10) DEFAULT NULL,
    PRIMARY KEY (id)
);

USE companydb;
INSERT INTO employees VALUES
    (1, 'John', 1000),
    (2, 'Marie', 2000),
    (3, 'Astrid', 400),
    (4, 'Joe', 25000)
    
SELECT * FROM employees;