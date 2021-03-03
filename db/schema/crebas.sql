--==============================================================
-- DBMS name:      ANSI Level 2
-- Created on:     2/24/2021 10:57:42 PM
--==============================================================

drop table account_info cascade;
drop index FK_CUSTOMER2ACCOUNT_FK;
drop table customers cascade;
drop index FK_CUSTOMERS2ORDERS_FK;
drop index FK_ORDERS2CUSTOMERS_FK;
drop table mtm_orders2customers cascade;
drop index FK_ORDERS2PRODUCTS_FK;
drop table orders cascade;
drop table products cascade;

