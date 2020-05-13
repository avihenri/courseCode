-- SQL: Creating, Updating, Deleting, Data
-- RELATIONAL DATABASE
-- - A db that organises info into one or more tables
-- - a Table - collection of data organised in rows & columns (also known as relations)
-- - A Column - set of data values for a particular type (name..)
-- - A Row - single record in a table
-- - all data stored are specific types 
--INTEGER, a positive or negative whole number
--TEXT, a text string
--DATE, the date formatted as YYYY-MM-DD
--REAL, a decimal value

--STATEMENTS
-- - A Statement - text that a db recognises as a valid command & ends with ;
CREATE TABLE table_name ( -- create table with name
   column_1 data_type, -- creates columns with data type
   column_2 data_type, 
   column_3 data_type
);

-- CREATE
-- - Allows us to creat a new table in the db
CREATE TABLE celebs (
   id INTEGER, 
   name TEXT, 
   age INTEGER
);

-- INSERT
-- - lets us insert a row into a table
INSERT INTO celebs (id, name, age) 
VALUES (1, 'Justin Bieber', 22);

-- ALTER
-- - ALTER TABLE adds a new column to a table
ALTER TABLE celebs 
ADD COLUMN twitter_handle TEXT; -- adds a column twitter = name & TEXT is data type

-- UPDATE
-- - edits a row
UPDATE celebs 
SET twitter_handle = '@taylorswift13' 
WHERE id = 4; 

-- DELETE 
-- - deletes one or more rows fromt a table
DELETE FROM celebs 
WHERE twitter_handle IS NULL;

-- CONSTRAINTS
-- - adds info about how columns can be used
-- - invoked after data type specification
   id INTEGER PRIMARY KEY, -- adds primary key
   name TEXT UNIQUE, -- adds unique
   date_of_birth TEXT NOT NULL, -- cannot be null
   date_of_death TEXT DEFAULT 'Not Applicable' -- adds a default
);

-- Review
-- Congratulations! We’ve learned six commands commonly used to manage data stored in a relational database and how to set constraints on such data. What can we generalize so far?

-- SQL is a programming language designed to manipulate and manage data stored in relational databases.

-- A relational database is a database that organizes information into one or more tables.
-- A table is a collection of data organized into rows and columns.
-- A statement is a string of characters that the database recognizes as a valid command.

-- CREATE TABLE creates a new table.
-- INSERT INTO adds a new row to a table.
-- SELECT queries data from a table.
-- ALTER TABLE changes an existing table.
-- UPDATE edits a row in a table.
-- DELETE FROM deletes rows from a table.
-- Constraints add information about how a column can be used.

CREATE TABLE friends (
  id INTEGER,
  name TEXT,
  birthday DATE
);

INSERT INTO friends (id, name, birthday)
VALUES (1, 'Jane Doe', '1990-05-30');

INSERT INTO friends (id, name, birthday) 
VALUES (2, 'Marte', '1986-09-07');

INSERT INTO friends (id, name, birthday) 
VALUES (3, 'Sarah', '1986-09-09');

UPDATE friends
SET birthday = '1987-09-09'
WHERE id = 3;

ALTER TABLE friends
ADD COLUMN email TEST;

UPDATE friends
SET email = 'jane@codecademy.com'
WHERE id = 1;

DELETE FROM friends
WHERE id = 1;

SELECT * FROM friends;


