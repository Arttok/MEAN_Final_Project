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

insert into USER (USER_NAME, EMAIL, user_password,  IS_ADMIN) values (0, 'Admin', 'Admin@admin.com', 'password', 1);
insert into USER (USER_NAME, EMAIL, user_password, IS_ADMIN) values (1, 'FooBar', 'FooBar@test.com', 'barFoo', 0);
insert into USER (USER_NAME, EMAIL, user_password, IS_ADMIN) values (2, 'BizBaz', 'BizBaz@test.com', 'bazBiz', 0);

#SELECT * FROM users;
#SELECT * FROM users WHERE is_admin = "0";
#SELECT username, password FROM users WHERE ID = 1;
#INSERT INTO users (ID, username, email, password, is_admin) VALUES (3, 'Michael', 'Michael@test.com', 'flickinger', '1');
#UPDATE users SET email = 'bizbaz123@test.com' WHERE ID = 3;
#DELETE FROM users WHERE ID = 3;

SELECT * FROM USER;