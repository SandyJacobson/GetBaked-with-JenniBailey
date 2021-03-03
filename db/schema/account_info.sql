--==============================================================
-- DBMS name:      ANSI Level 2
-- Created on:     2/24/2021 10:57:42 PM
--==============================================================


--==============================================================
-- Table: account_info
--==============================================================
create table account_info (
objid                serial primary key,
created              timestamp,
username             varchar(80),
email                varchar(80),
password             varchar(20),
notes                varchar(500),
last_login           timestamp
);

