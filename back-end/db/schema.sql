-- IF our db already exists, drop it
DROP DATABASE IF EXISTS songs_dev;

-- Create our database
CREATE DATABASE songs_dev;

-- Connect to the db(database)
\c songs_dev;

-- Create a table for our bookmarks
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    url TEXT,
    category TEXT,
    is_favorite BOOLEAN
)