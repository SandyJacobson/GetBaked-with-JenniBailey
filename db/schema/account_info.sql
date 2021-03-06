/*==============================================================*/
/* DBMS name:      PostgreSQL 9.x                               */
/* Created on:     3/4/2021 9:47:35 PM                          */
/*==============================================================*/


/*==============================================================*/
/* Table: account_info                                          */
/*==============================================================*/
create table account_info (
   objid                SERIAL               not null,
   customer_id          INT4                 null,
   created              DATE                 null,
   username             VARCHAR(80)          null,
   email                VARCHAR(80)          null,
   password             VARCHAR(20)          null,
   notes                VARCHAR(500)         null,
   last_login           DATE                 null,
   constraint PK_ACCOUNT_INFO primary key (objid)
);

/*==============================================================*/
/* Index: account_info_pk                                       */
/*==============================================================*/
create unique index account_info_pk on account_info (
objid
);

/*==============================================================*/
/* Index: otm_user2login_fk                                     */
/*==============================================================*/
create  index otm_user2login_fk on account_info (
customer_id
);

alter table account_info
   add constraint otm_customer4account_info foreign key (customer_id)
      references customers (objid)
      on delete restrict on update restrict;

