-- First need to create database

CREATE DATABASE die_db

-- Create a table for tools;

CREATE TABLE tools (
    id SERIAL PRIMARY KEY, 
    toolnumber VARCHAR(14),
    dpn INTEGER[]
);

--ADD

INSERT INTO tools (toolnumber, dpn) VALUES(255, '{45875423, 15236589, 45278541}');

-- Create a table for users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(10),
    userrole VARCHAR(10),
    userpas VARCHAR(10)
);

--ADD 

 -- not used on this moment.

-- Create a table for orders;

CREATE TABLE orderbase (
    id SERIAL PRIMARY KEY,
    machine VARCHAR(4),
    app VARCHAR(12),
    material VARCHAR(12),
    mechanic VARCHAR(6),
    ordertime TIMESTAMP(0) WITH TIME ZONE,
    orderstatus BOOLEAN
);

-- TEST 

--1
INSERT INTO  orderbase (id, machine, app, material, ordertime, orderstatus) 
    VALUES (1, 18, 432, 35812574, now(), true);


--2
INSERT INTO  orderbase (id, machine, mechanic, ordertime, orderstatus) 
    VALUES (2, 18, 'DIE', now(), true);

--3 
INSERT INTO  orderbase (id, machine, app, material, ordertime, orderstatus) 
    VALUES (3, 15, 255, 45278541, now(), true);

-- Create a table for number machines;

CREATE TABLE machinesnumb (
    id SERIAL PRIMARY KEY,
    machine VARCHAR(4)
);

--ADD
INSERT INTO machinesnumb (id, machine) VALUES (1, 1);
INSERT INTO machinesnumb (id, machine) VALUES (2, 2);
INSERT INTO machinesnumb (id, machine) VALUES (3, 3);
INSERT INTO machinesnumb (id, machine) VALUES (4, 4);
INSERT INTO machinesnumb (id, machine) VALUES (5, 5);
INSERT INTO machinesnumb (id, machine) VALUES (6, 6);
INSERT INTO machinesnumb (id, machine) VALUES (7, 7);
INSERT INTO machinesnumb (id, machine) VALUES (8, 8);
INSERT INTO machinesnumb (id, machine) VALUES (9, 9);
INSERT INTO machinesnumb (id, machine) VALUES (10, 10);

-- Create a table with list mechanic

CREATE TABLE mechaniclist (
    id SERIAL PRIMARY KEY,
    mechanic VARCHAR(12)
)

-- ADD
INSERT INTO mechaniclist (id, mechanic) VALUES (1, 'DIE');
INSERT INTO mechaniclist (id, mechanic) VALUES (2, 'Mechan');

