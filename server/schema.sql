DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;
CREATE TABLE messages (
  id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  text VARCHAR(255) NOT NULL DEFAULT 'NULL',
  timestamp TIMESTAMP NULL DEFAULT NULL,
  roomName VARCHAR(20) NULL DEFAULT NULL,
  username VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);



DROP TABLE IF EXISTS users;

CREATE TABLE users (
  username VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (username)
);



ALTER TABLE messages ADD FOREIGN KEY (username) REFERENCES users (username);





/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

