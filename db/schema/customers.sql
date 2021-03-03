--==============================================================
-- DBMS name:      ANSI Level 2
-- Created on:     2/24/2021 10:57:42 PM
--==============================================================


--==============================================================
-- Table: customers
--==============================================================
create table customers (
objid                serial primary key,
entry_date           timestamp,
user_id              integer,
first_name           varchar(50),
last_name            varchar(50),
foreign key (user_id)
      references account_info (objid)
);

--==============================================================
-- Index: FK_CUSTOMER2ACCOUNT_FK
--==============================================================
create  index FK_CUSTOMER2ACCOUNT on customers (
user_id ASC
);

