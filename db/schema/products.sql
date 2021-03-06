/*==============================================================*/
/* DBMS name:      PostgreSQL 9.x                               */
/* Created on:     3/4/2021 9:47:35 PM                          */
/*==============================================================*/


/*==============================================================*/
/* Table: products                                              */
/*==============================================================*/
create table products (
   objid                SERIAL               not null,
   product_name         VARCHAR(80)          null,
   product_category     VARCHAR(80)          null,
   price                DECIMAL(12,2)        null,
   quantity_at_price    INT4                 null,
   product_image        CHAR(65535)          null,
   product_code         VARCHAR(10)          null,
   constraint PK_PRODUCTS primary key (objid)
);

/*==============================================================*/
/* Index: products_pk                                           */
/*==============================================================*/
create unique index products_pk on products (
objid
);

