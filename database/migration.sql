DROP TABLE IF EXISTS tasks;

CREATE DATABASE todo;

CREATE TABLE tasks(
    id serial PRIMARY KEY,
    description VARCHAR(255)
);