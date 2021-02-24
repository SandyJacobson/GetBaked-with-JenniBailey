/*==============================================================*/
/* DBMS name:      PostgreSQL 9.x                               */
/* Created on:     2/17/2021 12:03:31 PM                        */
/*==============================================================*/


/*==============================================================*/
/* Table: products                                              */
/*==============================================================*/
create table products (
  objid                serial          not null,
  product_name         VARCHAR(80)                null,
  product_category     VARCHAR(80)                null,
  price                DECIMAL(12,2)             null,
  quantity_at_price    INTEGER         null,
  product_image        CHARACTER(65535)                 null
);

