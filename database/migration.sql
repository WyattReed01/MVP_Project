DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tasks;

CREATE TABLE users(
    id serial PRIMARY KEY NOT NULL,
    name TEXT,
    email TEXT,
    username TEXT
);

CREATE TABLE tasks(
    id serial PRIMARY KEY NOT NULL,
    title TEXT,
    description TEXT,
    date_created DATE,
    urgency INTEGER,
    is_complete BOOLEAN,
    users_id INTEGER REFERENCES users (id)
);