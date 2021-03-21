/*==============================================================*/
/* DBMS name:      PostgreSQL 9.x                               */
/* Created on:     3/4/2021 9:47:35 PM                          */
/*==============================================================*/


drop index otm_user2login_fk;

drop index account_info_pk;

drop table account_info;

drop index otm_user2address_fk;

drop index customer_data_pk;

drop table customer_data;

drop index customers_pk;

drop table customers;

drop index flavors_pk;

drop table flavors;

drop index otm_customer_login_record_fk;

drop index login_record_pk;

drop table login_record;

drop index fk_flavors4product_fk;

drop index fk_products4flavor_fk;

drop index mtm_flavor2product_pk;

drop table mtm_flavor2product;

drop index fk_customers2orders_fk;

drop index fk_orders2customers_fk;

drop index mtm_orders2customers_pk;

drop table mtm_orders2customers;

drop index fk_orders2products_fk;

drop index orders_pk;

drop table orders;

drop index products_pk;

drop table products;

