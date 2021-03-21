/*==============================================================*/
/* DBMS name:      PostgreSQL 9.x                               */
/* Created on:     3/4/2021 9:47:35 PM                          */
/*==============================================================*/


/*==============================================================*/
/* Table: customer_data                                         */
/*==============================================================*/
create table customer_data (
   objid                SERIAL               not null,
   customer_id          INT4                 null,
   address              VARCHAR(30)          null,
   city                 VARCHAR(30)          null,
   state                VARCHAR(2)           null,
   zip                  VARCHAR(10)          null,
   location_type        VARCHAR(30)          null,
   constraint PK_CUSTOMER_DATA primary key (objid)
);

/*==============================================================*/
/* Index: customer_data_pk                                      */
/*==============================================================*/
create unique index customer_data_pk on customer_data (
objid
);

/*==============================================================*/
/* Index: otm_user2address_fk                                   */
/*==============================================================*/
create  index otm_user2address_fk on customer_data (
customer_id
);

alter table customer_data
   add constraint otm_customer4customer_data foreign key (customer_id)
      references customers (objid)
      on delete restrict on update restrict;

