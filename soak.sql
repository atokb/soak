CREATE TABLE users(
    "userID" serial PRIMARY KEY,
    "first_name" varchar,
    "last_name" varchar,
    "email" varchar,
    "password" varchar,
    "goal_weight_routine" integer references goal_weight_routine ("goal_weight_routineID")
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


CREATE TABLE weight_category(
    "weightID" serial PRIMARY KEY,
    "category" varchar
);


CREATE TABLE goal_weight_routine(
    "goal_weight_routineID" serial PRIMARY KEY,
    "weight_categoryID" integer REFERENCES weight_category ("weightID"),
    "goalID" integer REFERENCES goal ("goalID"),
    "routine" INTEGER REFERENCES routine ("routineID")
);

INSERT INTO goal VALUES (1, 'Body Building'), (2, 'Healthy Living'), (3, 'Weight Loss');
INSERT INTO weight_category VALUES (1, '90-120'), (2, '120-150'), (3, '150-180'), (4, '180-200'), (5, '200+');