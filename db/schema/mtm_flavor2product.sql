/*==============================================================*/
/* DBMS name:      PostgreSQL 9.x                               */
/* Created on:     3/4/2021 9:47:35 PM                          */
/*==============================================================*/


/*==============================================================*/
/* Table: mtm_flavor2product                                    */
/*==============================================================*/
create table mtm_flavor2product (
   objid                SERIAL               not null,
   product_id           INT4                 null,
   flavor_id            INT4                 null,
   constraint PK_MTM_FLAVOR2PRODUCT primary key (objid)
);

/*==============================================================*/
/* Index: mtm_flavor2product_pk                                 */
/*==============================================================*/
create unique index mtm_flavor2product_pk on mtm_flavor2product (
objid
);

/*==============================================================*/
/* Index: fk_products4flavor_fk                                 */
/*==============================================================*/
create  index fk_products4flavor_fk on mtm_flavor2product (
product_id
);

/*==============================================================*/
/* Index: fk_flavors4product_fk                                 */
/*==============================================================*/
create  index fk_flavors4product_fk on mtm_flavor2product (
flavor_id
);

alter table mtm_flavor2product
   add constraint mtm_flavor4product foreign key (flavor_id)
      references flavors (objid)
      on delete restrict on update restrict;

alter table mtm_flavor2product
   add constraint mtm_product4flavor foreign key (product_id)
      references products (objid)
      on delete restrict on update restrict;

