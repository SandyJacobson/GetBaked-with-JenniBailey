/*==============================================================*/
/* DBMS name:      PostgreSQL 9.x                               */
/* Created on:     3/4/2021 9:47:35 PM                          */
/*==============================================================*/


/*==============================================================*/
/* Table: customers                                             */
/*==============================================================*/
create table customers (
   objid                SERIAL               not null,
   entry_date           DATE                 null,
   first_name           VARCHAR(50)          null,
   last_name            VARCHAR(50)          null,
   phone_number         VARCHAR(10)          null,
   constraint PK_CUSTOMERS primary key (objid)
);

/*==============================================================*/
/* Index: customers_pk                                          */
/*==============================================================*/
create unique index customers_pk on customers (
objid
);

