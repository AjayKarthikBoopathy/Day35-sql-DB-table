// Day35-SQL

// Design a DB for IMDB:-
// CREATE DATABASE IMDB; 

// 1. Movie should have multiple media (Video or Image):-

// CREATE TABLE movies VALUES (name text, genre text, artist text, reviews text); 
// CREATE TABLE artist VALUES (artist text, skills text);
// CREATE TABLE genre VALUES (movie text, genre text);
// CREATE TABLE reviews VALUES (reviewer text, movie text, review text);
// CREATE TABLE images VALUES (movie text, image blob);

// INSERT INTO movies VALUES ("Batman", "Thriller", "Nolan", "great");
// INSERT INTO images VALUES ("Ironman", "C:\Users\Ajay\Pictures\image3.jpg");

// 2. Movie can belong to multiple Genre:-

// INSERT INTO genre VALUES ("Ironman", "fantasy");
// INSERT INTO genre VALUES ("Ironman", "action");
// SELECT genre FROM movies WHERE movie="Ironman";

// 3. Movie can have multiple reviews and Review can belong to a user:- 

// INSERT INTO reviews VALUES ("NYC Times", "Ironman", "good");

// 4. Artist can have multiple skills:-

// INSERT INTO artist VALUES ("James", "direction");

// 5. Artist can perform multiple role in a single film:-

// INSERT INTO artist VALUES ("James", "cinematography");
// SELECT name, genre, artist, reviews FROM movies;
// SELECT skills FROM artist WHERE name="James";
