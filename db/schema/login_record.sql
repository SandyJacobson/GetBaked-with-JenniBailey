/*==============================================================*/
/* DBMS name:      PostgreSQL 9.x                               */
/* Created on:     3/4/2021 9:47:35 PM                          */
/*==============================================================*/


/*==============================================================*/
/* Table: login_record                                          */
/*==============================================================*/
create table login_record (
   objid                SERIAL               not null,
   account_id           INT4                 null,
   login_date           DATE                 null,
   session_time         VARCHAR(80)          null,
   constraint PK_LOGIN_RECORD primary key (objid)
);

/*==============================================================*/
/* Index: login_record_pk                                       */
/*==============================================================*/
create unique index login_record_pk on login_record (
objid
);

/*==============================================================*/
/* Index: otm_customer_login_record_fk                          */
/*==============================================================*/
create  index otm_customer_login_record_fk on login_record (
account_id
);

alter table login_record
   add constraint otm_login_record4account foreign key (account_id)
      references account_info (objid)
      on delete restrict on update restrict;

