-- INTRO
-- - More efficient to store data over multiple tables to not repeat rows 
-- - Example
-- -- Magazine with users that have different types of subscriptions to different products
-- -- - split this into 3 tables
-- -- -- Orders, subscriptions, customers

-- COMBINING TABLES MANUALLY
-- - joining tables

-- COMBING TABLES WITH SQL
-- - JOIN keyword
SELECT * -- selects all columns - to select certain columns SELECT orders.order_id, customers.customer_name
FROM orders -- from the orders table
JOIN customers -- join the customers table
  ON orders.customer_id = customers.customer_id; -- by matching these columns

SELECT * 
FROM orders
JOIN subscriptions
  ON orders.subscription_id = subscriptions.subscription_id;

SELECT * 
FROM orders
JOIN subscriptions
  ON orders.subscription_id = subscriptions.subscription_id
WHERE subscriptions.description = 'Fashion Magazine';

-- INNER JOINS
-- - if a table is out of date and and rows don't match when you try and join it will not show the unmatched results
SELECT COUNT(*)
FROM newspaper;

SELECT COUNT(*)
FROM online;

SELECT COUNT(*)
FROM newspaper
JOIN online
  ON newspaper.id = online.id;

-- LEFT JOINS
-- - What if we want to keep the miss matched rows
-- - left join will keep all rows from the first table and omit un matched from second table
SELECT *
FROM table1
LEFT JOIN table2
  ON table1.c2 = table2.c2;

SELECT *
FROM newspaper
LEFT JOIN online
  ON newspaper.id = online.id;

SELECT *
FROM newspaper
LEFT JOIN online
  ON newspaper.id = online.id
WHERE online.id IS NULL;

-- PRIMARY KEY VS FOREIGN KEY
-- - Primary keys
    -- few requirements - cannot be null, must be unique, a table can not have more than 1 PK
    -- usually just called ID
-- - Foreign Key
    -- when a primary key of another table shows in a table that is a foreign key
    -- should be more descriptive name than id
SELECT *
FROM classes
INNER JOIN students
  ON classes.id = students.class_id;

-- CROSS JOIN
-- - Combine all rows from one table with all rows from another
    -- used when we need to compare each row of a table to a list of values
SELECT shirts.shirt_color,
   pants.pants_color
FROM shirts
CROSS JOIN pants;

SELECT COUNT(*)
FROM newspaper
WHERE start_month <= 3 AND end_month >= 3;

SELECT *
FROM newspaper
CROSS JOIN months;

SELECT *
FROM newspaper
CROSS JOIN months
WHERE start_month <= month AND end_month >= month;

SELECT month,
  COUNT(*)
FROM months
CROSS JOIN newspaper
WHERE start_month <= month AND end_month >= month
GROUP BY month;
-- month	COUNT(*)
-- 1	2
-- 2	9
-- 3	13
-- 4	17
-- 5	27
-- 6	30
-- 7	20
-- 8	22
-- 9	21
-- 10	19
-- 11	15
-- 12	10

-- UNION
-- - Stack one dataset on top of another

-- table1:
    -- pokemon	type
    -- Bulbasaur	Grass
    -- Charmander	Fire
    -- Squirtle	Water

-- table2:
    -- pokemon	type
    -- Snorlax	Normal

-- If we combine these two with UNION:

SELECT *
FROM table1
UNION
SELECT *
FROM table2;

-- result
    -- pokemon	type
    -- Bulbasaur	Grass
    -- Charmander	Fire
    -- Squirtle	Water
    -- Snorlax	Normal

-- strict rules for appending data
    -- tables myst have the same number of columns
    -- columns must have the same data types in the same order as the first table

-- WITH
-- - Oftentimes we want to combine two tables but one table is the result of a calculation 
SELECT customer_id,
   COUNT(subscription_id) AS 'subscriptions'
FROM orders
GROUP BY customer_id;
-- if we need the customer name we can include it with the WITH clause
WITH previous_results AS (
    SELECT customer_id,
        COUNT(subscription_id) AS 'subscriptions'
    FROM orders
    GROUP BY customer_id;
)
SELECT *
FROM previous_results
JOIN customers
    -- ON ....

WITH previous_query AS (
  SELECT customer_id,
     COUNT(subscription_id) AS 'subscriptions'
  FROM orders
  GROUP BY customer_id
)
SELECT customers.customer_name, previous_query.subscriptions
FROM previous_query
JOIN customers
  ON previous_query.customer_id = customers.customer_id;

-- Review
-- In this lesson, we learned about relationships between tables in relational databases and how to query information from multiple tables using SQL.

-- Let’s summarize what we’ve learned so far:

-- JOIN will combine rows from different tables if the join condition is true.
-- LEFT JOIN will return every row in the left table, and if the join condition is not met, NULL values are used to fill in the columns from the right table.
-- Primary key is a column that serves a unique identifier for the rows in the table.
-- Foreign key is a column that contains the primary key to another table.
-- CROSS JOIN lets us combine all rows of one table with all rows of another table.
-- UNION stacks one dataset on top of another.
-- WITH allows us to define one or more temporary tables that can be used in the final query.