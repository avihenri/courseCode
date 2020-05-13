-- AGGREGATE FUNCTIONS
-- Introduction
-- - calculations performed on multiple rows is call aggregates

-- COUNT(): count the number of rows
-- - Function that takes the column name as an argument & counts the numner of non-empty values
SELECT COUNT(*)
FROM table_name;

-- SUM(): the sum of the values in a column
-- - Function that takes the column name as an argument & returns the sum off all the values
SELECT SUM(downloads)
FROM fake_apps;

-- MAX()/MIN(): the largest/smallest value
-- - Return the highest &lowest values in a column
SELECT MAX(downloads)
FROM fake_apps;

-- AVG(): the average of the values in a column
-- - Returns the average value of a column
SELECT AVG(downloads)
FROM fake_apps;

-- ROUND(): round the values in the column
-- - takes two arguments - column name & integer
SELECT name, ROUND(price, 0) -- 0 decimal places
FROM fake_apps;
SELECT ROUND(AVG(price), 2)
FROM fake_apps;

-- Group by
-- - a clause that is used with aggregate functions.
-- - used with select statements to arrange identical data groups
-- - comes after WHERE but before ORDER BY or LIMIT
-- - if we want to know the mean ratings for all movies each year we could do this -
SELECT AVG(imdb_rating)
FROM movies
WHERE year = 1999;

SELECT AVG(imdb_rating)
FROM movies
WHERE year = 2000;

SELECT AVG(imdb_rating)
FROM movies
WHERE year = 2001; 
-- but this is better -
SELECT year,
   AVG(imdb_rating)
FROM movies
GROUP BY year
ORDER BY year;
-- - we might want to group by a calculation done in a column
-- - eg. how many movies have IMDb ratings that round to 1, 2, 3, 4, 5
SELECT ROUND(imdb_rating),
   COUNT(name)
FROM movies
GROUP BY ROUND(imdb_rating)
ORDER BY ROUND(imdb_rating);
-- - but we can do this..
SELECT ROUND(imdb_rating),
   COUNT(name)
FROM movies
GROUP BY 1 -- 1 being the column
ORDER BY 1;

-- 1 refers to category.
-- 2 refers to price.
-- 3 refers to AVG(downloads)
-- Now, change the GROUP BY with numbers:
SELECT category, 
   price,
   AVG(downloads)
FROM fake_apps
GROUP BY 1, 2;

-- HAVING
-- - in addition to group by we can filter which groups to include & which to exclude
-- - e.g we want to see how many movies of different genres were produced each year but only care about years & genres at least 10 movies
-- - having is similar to WHERE but used with groups
SELECT year,
   genre,
   COUNT(name)
FROM movies
GROUP BY 1, 2
HAVING COUNT(name) > 10;
-- - Use WHERE - to limit results of query based on values of rows 
-- - Use HAVING - to limit results based on an aggregate property
-- - always comes after GROUP BY but before ORDER BY & LIMIT

-- AGGREGATE FUNCTIONS
-- Review
-- Congratulations!

-- You just learned how to use aggregate functions to perform calculations on your data. What can we generalize so far?

-- COUNT(): count the number of rows
-- SUM(): the sum of the values in a column
-- MAX()/MIN(): the largest/smallest value
-- AVG(): the average of the values in a column
-- ROUND(): round the values in the column
-- Aggregate functions combine multiple rows together to form a single value of more meaningful information.

-- GROUP BY is a clause used with aggregate functions to combine data from one or more columns.
-- HAVING limit the results of a query based on an aggregate property


