-- CODE CHALLENGE: MULTIPLE TABLES

-- Code Challenge 1
-- For this challenge, you’ll use the following tables:

-- plans

-- Column	    Description
-- id	        A unique identifier for the plan
-- price	    The monthly cost of the plan
-- description	A description of the plan

-- premium_users

-- Column	            Description
-- user_id	            A unique identifier for the user
-- membership_plan_id	An ID for the user's payment plan (matches `plans.id`)
-- purchase_date	    Date when the user purchased their premium plan
-- cancel_date	        Date when the user canceled (NULL if they haven't)

-- Let’s see which plans are used by which premium members!
-- The column membership_plan_id in premium_users should match the column id in plans.
-- Join plans and premium_users and select:
-- user_id from premium_users
-- description from plans
SELECT premium_users.user_id, plans.description
FROM premium_users
INNER JOIN plans
  ON plans.id = premium_users.membership_plan_id;

-- Code Challenge 2
-- For this exercise, you’ll use the following tables:

-- songs

-- Column	Description
-- id	    A unique identifier for each song
-- title	The title of the song
-- artist	The artist who recorded the song
-- year	    The year that the song was released

-- plays

-- Column	    Description
-- user_id	    A unique identifier for each user
-- song_id	    An ID for which song was played (matches songs.id)
-- play_date	The date when the user played this song
-- play_hour	The hour when the user played this song (0-23)

-- Let’s see the titles of songs that were played by each user!
-- The column song_id in plays should match the column id in songs.
-- Join plays to songs and select:
-- user_id from plays
-- play_date from plays
-- title from songs

 SELECT plays.user_id, plays.play_date, songs.title
 FROM plays
 INNER JOIN songs
  ON plays.song_id = songs.id;


-- Code Challenge 3
-- For this challenge, you’ll use the following tables:

-- users

-- Column	    Description
-- id	        A unique identifier for each user
-- first_name	The first name of the user
-- last_name	The last name of the user
-- age	        The age name of the user
-- gender	    The gender name of the user

-- premium_users

-- Column	            Description
-- user_id	            A unique identifier for each user
-- membership_plan_id	An ID for the user’s payment plan (matches plans.id)
-- purchase_date	    Date when the user purchased their premium plan
-- cancel_date      	Date when the user canceled (NULL if they haven’t)
-- Which users aren’t premium users?
-- Use a LEFT JOIN to combine users and premium_users and select id from users.
-- The column id in users should match the column user_id in premium_users.
-- Use a WHERE clause to limit the results to users where premium_users.user_id IS NULL. 
-- This will remove premium users and leave you with only free users.
 SELECT users.id
 FROM users
 LEFT JOIN premium_users
  ON users.id = premium_users.user_id
 WHERE premium_users.user_id IS NULL;

-- Code Challenge 4
-- We’ve used a WITH statement to create two temporary tables:

-- january contains all song plays from January 2017
-- february contains all song plays from February 2017

-- Use a left join to combine january and february on user_id and select user_id from january.
-- Add the following WHERE statement to find which users played songs in January, but not February:
-- WHERE february.user_id IS NULL
WITH january AS (
  SELECT *
  FROM plays
  WHERE strftime("%m", play_date) = '01'
),
february AS (
  SELECT *
  FROM plays
  WHERE strftime("%m", play_date) = '02'

)
SELECT january.user_id
FROM january
LEFT JOIN february
  ON january.user_id = february.user_id
WHERE february.user_id IS NULL;

-- Code Challenge 5
-- For this challenge, you’ll use the following tables:

-- months

-- Column	Description
-- months	The first date of each month of the year

-- premium_users

-- Column	        Description
-- user_id	        A unique identifier for the user
-- plan_id	        An ID for the user’s payment plan (matches plans.id)
-- purchase_date	Date when the user purchased their premium plan
-- cancel_date	    Date when the user canceled (NULL if they haven’t)
-- For each month in months, we want to know if each user in premium_users was active or canceled. 
-- Cross join months and premium_users and select:

-- user_id from premium_users
-- purchase_date from premium_users
-- cancel_date from premium_users
-- months from months

