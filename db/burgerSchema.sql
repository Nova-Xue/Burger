drop database if exists burger_db;
create database burger_db;
use burger_db;
create table burgerlist(
    id int primary key auto_increment,
    burger_name varchar(100) not null,
    eaten_state boolean DEFAULT false
);