-- SQL
-- Usage funnels - multi-step process where customers can leave at different steps
 SELECT ROUND(
   100.0 * COUNT(DISTINCT c.user_id) /
   COUNT(DISTINCT b.user_id)
 ) AS browse_to_checkout_percent,
 ROUND(
   100.0 * COUNT(DISTINCT p.user_id) /
   COUNT(DISTINCT c.user_id)
 ) AS checkout_to_purchase_percent
 FROM browse b
 LEFT JOIN checkout c
 	ON b.user_id = c.user_id
 LEFT JOIN purchase p
 	ON c.user_id = p.user_id;

-- Analasing User Churn
-- Churn rate = % of subscribers to a monthly service who have cancelled
-- Example -
	ACME has 1000 customers in Jan
	In Feb - 200 customers sign up & 250 leave
	250 / 1000 + 200 = 20.8%
	Cancellations divided by total subscribers
SELECT COUNT(DISTINCT user_id) AS enrollments,
	COUNT(CASE
       	WHEN strftime("%m", cancel_date) = '03'
        THEN user_id
  END) AS march_cancellations,
 	ROUND(100.0 * COUNT(CASE
       	WHEN strftime("%m", cancel_date) = '03'
        THEN user_id
  END) / COUNT(DISTINCT user_id)) AS churn_rate
FROM pro_users
WHERE signup_date < '2017-04-01'
	AND (
    (cancel_date IS NULL) OR
    (cancel_date > '2017-03-01')
  );

-- Determining Web Traffic Attribution
-- UTM Parameters - special tags that site owners add to pages to track what website a user was on before they reach a website
-- such as google, facebook or buzzfeed etc
 SELECT utm_source,
 	COUNT(DISTINCT user_id) AS num_users
FROM page_visits
GROUP BY 1
ORDER BY 2 DESC;

-- QUERIES
SELECT * = select all
SELECT col1, col2 - will only select column 1 & 2

-- AS - allows you to rename a column or table using an alias, has to be in single quotes
SELECT name AS 'Titles'

-- DISTINCT
-- distinct - returns unique values in the output, filters out dup values
SELECT tools FROM inventory - would bring back all with dup values
SELECT DISTINCT tools FROM inventory - would bring back a filtered version

-- WHERE
-- - restricts results to set only rows we want
SELECT *
FROM movies
WHERE imdb_rating > 8;
-- COMPARISON OPERATORS
-- = equal to
-- != not equal to
-- > greater than
-- < less than
-- >= greater than or equal to
-- <= less than or equal to

-- LIKE
-- - compare values like movies that have similar values 'seven' or 'se7en'
SELECT * 
FROM movies
WHERE name LIKE 'Se_en'; se_en represents a pattern with a wildcard charcter
-- _ = subsitute character
-- The % symbol is another wildcard used for like
-- - matches zero or more missing letters in a pattern
-- - A% - all movies that begin with A
-- - %a - all movies that end in a
-- - %man% - will search for any movies with the word man in its name
-- Below filters results that begin with an A
SELECT * 
FROM movies
WHERE name LIKE 'A%';
SELECT * 
FROM movies
WHERE name LIKE 'The %';

-- ISNULL
-- - can't test for null values with coparison operators
-- - need to use IS NULL or IS NOT NULL
SELECT name
FROM movies 
WHERE imdb_rating IS NOT NULL;

BETWEEN
- used in WHERE clause
- filters results set within a certain range
SELECT *
FROM movies
WHERE year BETWEEN 1990 AND 1999; 1990 through to and including 2

-- You can use it for the alphabet as well - 
SELECT *
FROM movies
WHERE year BETWEEN 'A' AND 'J'; A throught to J so not including J

-- AND 
-- - combine multiple conditions in WHERE clause

SELECT * 
FROM movies
WHERE year 
BETWEEN 1990 AND 1999 - 1st condition
   AND - combines the two
genre = 'romance'; 2nd condition

-- OR
-- - similar to AND as it combines multiple conditions
-- - displays rows if any condition is true
-- - AND displays rows if all conditions are true
SELECT *
FROM movies
WHERE year > 2014
   OR genre = 'action';

-- ORDER BY
-- - orders results
-- - either alphabetically or numerically
-- - either asc or desc
SELECT *
FROM movies
WHERE imdb_rating > 8
ORDER BY year DESC;

-- LIMIT
-- - lets you specify a max number of rows
SELECT *
FROM movies
LIMIT 10;
-- - always at the very end of the query
-- - not supported in SQL databases

-- CASE
-- - allows us to create different outputs
-- - if-then logic
SELECT name,
 CASE
  WHEN imdb_rating > 8 THEN 'Fantastic'
  WHEN imdb_rating > 6 THEN 'Poorly Received'
  ELSE 'Avoid at All Costs'
 END
FROM movies

-- In the below we add to the END as the column name is long CASE
  WHEN imdb_rating > 8 THEN 'Fantastic'
  WHEN imdb_rating > 6 THEN 'Poorly Received'
  ELSE 'Avoid at All Costs'
 END AS 'Review'
FROM movies;

-- Review
-- Congratulations!

-- We just learned how to query data from a database using SQL. We also learned how to filter queries to make the information more specific and useful.

-- Let’s summarize:

-- SELECT is the clause we use every time we want to query information from a database.
-- AS renames a column or table.
-- DISTINCT return unique values.
-- WHERE is a popular command that lets you filter the results of the query based on conditions that you specify.
-- LIKE and BETWEEN are special operators.
-- AND and OR combines multiple conditions.
-- ORDER BY sorts the result.
-- LIMIT specifies the maximum number of rows that the query will return.
-- CASE creates different outputs.











