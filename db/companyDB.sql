-- Active: 1706665414356@@127.0.0.1@3306

DROP DATABASE IF EXISTS companydb;

CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;

-- Creamos la tabla department
CREATE TABLE department(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS employee;

CREATE TABLE employee(
    id  INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    department_id INT(11) NOT NULL,
    salary INT (6) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

 -- Insertamos 5 employees

INSERT INTO department (name) VALUES ('IT');
INSERT INTO department (name) VALUES ('HR');
INSERT INTO department (name) VALUES ('SALES');
INSERT INTO department (name) VALUES ('MARKETING');
INSERT INTO department (name) VALUES ('FINANCE');

SELECT * FROM department;

INSERT INTO employee (name, department_id, salary) VALUES ('Jayr', 1, 50000); 
INSERT INTO employee (name, department_id, salary) VALUES ('Nori', 2, 60000);
INSERT INTO employee (name, department_id, salary) VALUES ('Diego', 3, 70000);
INSERT INTO employee (name, department_id, salary) VALUES ('Alan', 4, 80000);
INSERT INTO employee (name, department_id, salary) VALUES ('Charlie', 5, 90000);

SELECT * FROM employee;

