CREATE DATABASE final_proyect;

\c final_proyect;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  password_hash VARCHAR(128) NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  content TEXT NOT NULL,
  author_id INTEGER REFERENCES users(id) NOT NULL
);

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  post_id INTEGER REFERENCES posts(id) NOT NULL
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  price FLOAT NOT NULL
  description VARCHAR(50) NOT NULL,
  url VARCHAR(500) NOT NULL,
  author VARCHAR(50) NOT NULL,
);