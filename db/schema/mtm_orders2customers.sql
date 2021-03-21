/*==============================================================*/
/* DBMS name:      PostgreSQL 9.x                               */
/* Created on:     3/4/2021 9:47:35 PM                          */
/*==============================================================*/


/*==============================================================*/
/* Table: mtm_orders2customers                                  */
/*==============================================================*/
create table mtm_orders2customers (
   objid                SERIAL               not null,
   entry_date           DATE                 null,
   order_id             INT4                 null,
   customer_id          INT4                 null,
   payment_status       VARCHAR(1000)        null,
   order_status         VARCHAR(500)         null,
   order_total          DECIMAL(12,2)        null,
   tax_due              DECIMAL(12,2)        null,
   shipping_fee         DECIMAL(12,2)        null,
   constraint PK_MTM_ORDERS2CUSTOMERS primary key (objid)
);

/*==============================================================*/
/* Index: mtm_orders2customers_pk                               */
/*==============================================================*/
create unique index mtm_orders2customers_pk on mtm_orders2customers (
objid
);

/*==============================================================*/
/* Index: fk_orders2customers_fk                                */
/*==============================================================*/
create  index fk_orders2customers_fk on mtm_orders2customers (
order_id
);

/*==============================================================*/
/* Index: fk_customers2orders_fk                                */
/*==============================================================*/
create  index fk_customers2orders_fk on mtm_orders2customers (
customer_id
);

alter table mtm_orders2customers
   add constraint mtm_customer4order foreign key (customer_id)
      references customers (objid)
      on delete restrict on update restrict;

alter table mtm_orders2customers
   add constraint mtm_order4customer foreign key (order_id)
      references orders (objid)
      on delete restrict on update restrict;

