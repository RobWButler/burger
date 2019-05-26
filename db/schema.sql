CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id int auto_increment,
    burger_name varchar(128) not null,
    devoured boolean default false,
    primary key (id)
)