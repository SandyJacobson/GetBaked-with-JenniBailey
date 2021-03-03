--==============================================================
-- DBMS name:      ANSI Level 2
-- Created on:     2/24/2021 10:57:42 PM
--==============================================================


--==============================================================
-- Table: orders
--==============================================================
create table orders (
objid               serial primary key,
order_number        character(80),
entry_date          timestamp,
product_id          integer,
quantity            integer,
unit_price          decimal(12,2),
summary_price       decimal(12,2),
deliver_due_date    timestamp,
order_date          timestamp,
other_charges       decimal(12,2),
foreign key (product_id)
      references products (objid)
);

--==============================================================
-- Index: FK_ORDERS2PRODUCTS_FK
--==============================================================
create  index FK_ORDERS2PRODUCTS on orders (
product_id ASC
);

