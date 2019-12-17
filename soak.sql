CREATE TABLE users(
    "userID" serial PRIMARY KEY,
    "first_name" varchar,
    "last_name" varchar,
    "email" varchar,
    "password" varchar,
    "goal_routineID" INTEGER REFERENCES goal_routine ("goal_routineID")
);

CREATE TABLE goal(
    "goalID" serial PRIMARY KEY,
    "goal" varchar
);

CREATE TABLE routine(
    "routineID" serial PRIMARY KEY,
    "routine_name" VARCHAR,
    "routine_instruction" VARCHAR
);

CREATE TABLE goal_routine(
    "goal_routineID" serial PRIMARY KEY,
    "goalID" INTEGER REFERENCES goal ("goalID"),
    "routineID" INTEGER REFERENCES routine ("routineID")
);

INSERT INTO goal VALUES (1, 'Body Building'), (2, 'Healthy Living'), (3, 'Weight Loss');

INSERT INTO routine VALUES (1, 'Push Ups Rumble', 'Do 15 pushups in 15 seconds, 30 pushups in 30 seconds, a minute non-stop pushups, and end with 15 pushups in 15 seconds'),
(2, 'Spartan Racer', 'run 400 miles X5 in less than a minute and take a minute break after each 400 mile'),
(3, 'Jumping Squatter', 'Do 5 reps of 25 Jumping Squats'),
(4, 'Stubborn Stairs', 'Do 2000 stairs'),
(5, 'V-Ups', 'Do 5 reps of V-Situps');