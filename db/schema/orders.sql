/*==============================================================*/
/* DBMS name:      PostgreSQL 9.x                               */
/* Created on:     3/4/2021 9:47:35 PM                          */
/*==============================================================*/


/*==============================================================*/
/* Table: orders                                                */
/*==============================================================*/
create table orders (
   objid                SERIAL               not null,
   order_number         VARCHAR(80)          null,
   entry_date           DATE                 null,
   product_id           INT4                 null,
   quantity             INT4                 null,
   unit_price           DECIMAL(12,2)        null,
   delivery_due_date    DATE                 null,
   order_date           DATE                 null,
   order_completed      DATE                 null,
   other_charges        DECIMAL(12,2)        null,
   constraint PK_ORDERS primary key (objid)
);

/*==============================================================*/
/* Index: orders_pk                                             */
/*==============================================================*/
create unique index orders_pk on orders (
objid
);

/*==============================================================*/
/* Index: fk_orders2products_fk                                 */
/*==============================================================*/
create  index fk_orders2products_fk on orders (
product_id
);

alter table orders
   add constraint otm_product4order foreign key (product_id)
      references products (objid)
      on delete restrict on update restrict;

