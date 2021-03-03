--==============================================================
-- DBMS name:      ANSI Level 2
-- Created on:     2/24/2021 10:57:42 PM
--==============================================================


--==============================================================
-- Table: mtm_orders2customers
--==============================================================
create table mtm_orders2customers (
objid                serial primary key,
entry_date           timestamp,
order_id             integer,
customer_id          integer,
payment_status       varchar(1000),
order_status         varchar(500),
foreign key (order_id)
      references orders (objid),
foreign key (customer_id)
      references customers (objid)
);

--==============================================================
-- Index: FK_ORDERS2CUSTOMERS_FK
--==============================================================
create  index FK_ORDERS2CUSTOMERS on mtm_orders2customers (
order_id ASC
);

--==============================================================
-- Index: FK_CUSTOMERS2ORDERS_FK
--==============================================================
create  index FK_CUSTOMERS2ORDERS on mtm_orders2customers (
customer_id ASC
);

