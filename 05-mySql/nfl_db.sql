-- Step 1: Drop DB if it exist --
DROP DATABASE IF EXISTS nfl_db;
-- Step 2: Create DB --
CREATE DATABASE nfl_db;
-- Step 3: Use DB --
USE nfl_db;
-- Step 4: Create tables -- 
CREATE TABLE teams (
id INTEGER NOT NULL AUTO_INCREMENT,
name TEXT(30) NOT NULL,
city VARCHAR(30),
number_of_players INTEGER,
budget REAL,
PRIMARY KEY (id)
);

CREATE TABLE player (
id INTEGER NOT NULL AUTO_INCREMENT,
name TEXT(30) NOT NULL,
age INTEGER,
years_of_experience INTEGER,
rating INTEGER,
PRIMARY KEY (id)
);

CREATE TABLE drafted (
id INTEGER NOT NULL AUTO_INCREMENT,
player_id INTEGER NOT NULL, 
team_id INTEGER NOT NULL,
pick_number INTEGER NOT NULL,
PRIMARY KEY (id)
); 
-- Step 5: Check that tables exist. (You should get empty tables) Once you've confirmed, delete these lines. --
SELECT * FROM teams;
SELECT * FROM player;
SELECT * FROM drafted;
-- Step 6: Insert values to tables --
INSERT INTO teams(name, city, number_of_players, budget)
VALUES ('Atlanta Falcons', 'Atlanta', 85, 100000002.65);
INSERT INTO teams(name, city, number_of_players, budget)
VALUES ('New York Giants', 'New York City', 93, 110000002.78);
INSERT INTO teams(name, city, number_of_players, budget)
VALUES ('Denver Broncos', 'Denver', 78, 100060002.43);
INSERT INTO teams(name, city, number_of_players, budget)
VALUES ('Los Angeles Rams', 'Los Angeles', 86, 100890002.27);

INSERT INTO player(name, age, years_of_experience, rating)
VALUES ('Robert Anderson', 22, 4, 28);
INSERT INTO player(name, age, years_of_experience, rating)
VALUES ('Andrew Bergstrom', 21, 3, 35);
INSERT INTO player(name, age, years_of_experience, rating)
VALUES ('Stephany Bolivar', 19, 1, 1);
INSERT INTO player(name, age, years_of_experience, rating)
VALUES ('Yawukal Belay', 24, 5, 8);
INSERT INTO player(name, age, years_of_experience, rating)
VALUES ('Messeret Ketema', 23, 4, 13);
INSERT INTO player(name, age, years_of_experience, rating)
VALUES ('Juan Batist', 20, 2, 30);
INSERT INTO player(name, age, years_of_experience, rating)
VALUES ('Aki Carusillo', 19, 2, 18);
INSERT INTO player(name, age, years_of_experience, rating)
VALUES ('Charlie Day', 36, 0, 1);

INSERT INTO drafted (player_id, team_id, pick_number)
VALUES (6, 2, 8);
INSERT INTO drafted (player_id, team_id, pick_number)
VALUES (7, 1, 53);
INSERT INTO drafted (player_id, team_id, pick_number)
VALUES (3, 4, 11);
INSERT INTO drafted (player_id, team_id, pick_number)
VALUES (2, 4, 5);
INSERT INTO drafted (player_id, team_id, pick_number)
VALUES (4, 3, 1);
INSERT INTO drafted (player_id, team_id, pick_number)
VALUES (5, 1, 68);
INSERT INTO drafted (player_id, team_id, pick_number)
VALUES (1, 2, 22);
-- Step 7: Check that your values have been inputed correctly in their respective tables (Once you've confirmed, delete these lines) --
SELECT * FROM teams;
SELECT * FROM player;
SELECT * FROM drafted;
-- Step 8: Combine the player table with the drafted table. --
-- Step __ : Make a query that joins all three tables and displays with players name, years_of_experience, and rating. The pick_number from the drafted table and the name from the teams table.  --
