drop database hca;
create database hca;
use hca;

create table USERS (
	ID		 	int(10) NOT NULL AUTO_INCREMENT, 
	USER_NAME 	varchar(255) NOT NULL, 
	EMAIL 		varchar(255) NOT NULL, 
    user_password varchar(255) NOT NULL,
	IS_ADMIN	smallint(1) NOT NULL DEFAULT 0,
	createdAt  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	UNIQUE		UQ_USER_1 (USER_NAME),
	PRIMARY KEY(ID)
);

insert into USER (USER_NAME, EMAIL, user_password,  IS_ADMIN) values ('Admin', 'Admin@admin.com', 'password', 1);
insert into USER (USER_NAME, EMAIL, user_password, IS_ADMIN) values ('FooBar', 'FooBar@test.com', 'barFoo', 0);
insert into USER (USER_NAME, EMAIL, user_password, IS_ADMIN) values ('BizBaz', 'BizBaz@test.com', 'bazBiz', 0);

SELECT * FROM USER;