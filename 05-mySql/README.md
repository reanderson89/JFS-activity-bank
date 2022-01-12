W3 schools SQL tutorial and reference - https://www.w3schools.com/sql/default.asp

-- Step 1: Drop DB if it exist --

-- Step 2: Create DB --

-- Step 3: Use DB --

-- Step 4: Create "teams" tables -- 
    create tables - https://www.w3schools.com/sql/sql_create_table.asp
    not null - https://www.w3schools.com/sql/sql_notnull.asp
    auto increment - https://www.w3schools.com/sql/sql_autoincrement.asp
    data types - https://www.w3schools.com/sql/sql_datatypes.asp

    - The teams table should have the following columns
    - id (should not be null and should auto increment)
    - name (text)
    - city (varchar)
    - number_of_players (integer)
    - budget (real)
    - PRIMARY KEY(id)

-- Step 5: Insert values to "teams" table --
    Insert into - https://www.w3schools.com/sql/sql_insert.asp

-- Step 6: Check that tables exist and values are inserted correctly. Then delete those queries. --
    Select queries - https://www.w3schools.com/sql/sql_select.asp

-- Step 7: Create "player" and "drafted" tables --

-- Step 8: Insert values to "player" and "drafted" tables --

-- Step 9: Check that the tables exist and the values are inserted correctly. Then delete those queries. --

-- Step 10: Select the "teams" from the drafted table, show each team only once in ascending order. --
    Joins - https://www.w3schools.com/sql/sql_join.asp
    Order by - https://www.w3schools.com/sql/sql_orderby.asp
    Group by - https://www.w3schools.com/sql/sql_groupby.asp

-- Step 11: Select the players that have a rating lower than 20. --
    Where - https://www.w3schools.com/sql/sql_where.asp

-- Step 12: Combine the "player" table with the "drafted" table. --

-- Step 13: Combine the "player" table with the "drafted" table and check for any players who did not get drafted --
    Left Join - https://www.w3schools.com/sql/sql_join_left.asp

-- Step 14: Make a query that joins all three tables and displays the players name, years_of_experience, and rating. The pick_number from the drafted table and the name from the teams table.  --
    Google - https://www.google.com