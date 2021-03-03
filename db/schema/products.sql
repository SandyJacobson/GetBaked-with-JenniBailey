--==============================================================
-- DBMS name:      ANSI Level 2
-- Created on:     2/24/2021 10:57:42 PM
--==============================================================


--==============================================================
-- Table: products
--==============================================================
create table products (
objid               serial primary key,
product_name        character(80),
category            character(80),
price               decimal(12,2),
quantity_at_price    integer,
image_location      character(300)
);

