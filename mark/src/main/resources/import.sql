-- USER
INSERT INTO USER (user_id, user_email, user_name, password, use_flag) VALUES('US0001', 'admin', '관리자', '5ffc9fd4d0657f0d70efce171ebfd9daf2cdb5e760833af03e83de97af9a5e05', 'true');
INSERT INTO USER (user_id, user_email, user_name, password, use_flag) VALUES('US0002', 'mskim@markncompany.co.kr', '김민섭', '5ffc9fd4d0657f0d70efce171ebfd9daf2cdb5e760833af03e83de97af9a5e05', 'true');

-- USER_ROLES
INSERT INTO USER_ROLES (user_id, roles) VALUES('US0001', 'ROLE_ADMIN');
INSERT INTO USER_ROLES (user_id, roles) VALUES('US0001', 'ROLE_USER');
INSERT INTO USER_ROLES (user_id, roles) VALUES('US0002', 'ROLE_ADMIN');
INSERT INTO USER_ROLES (user_id, roles) VALUES('US0002', 'ROLE_USER');

-- MENU
insert into menu value ('MN0001', '에스프레소', 'BV', 4000, 99, 'system', now(), 'system', now());
insert into menu value ('MN0002', '에스프레소 마끼야또', 'BV', 4500, 99, 'system', now(), 'system', now());
insert into menu value ('MN0003', '아메리카노', 'BV', 4000, 99, 'system', now(), 'system', now());
insert into menu value ('MN0004', '카푸치노', 'BV', 5000, 99, 'system', now(), 'system', now());
insert into menu value ('MN0005', '카페 라떼', 'BV', 5000, 99, 'system', now(), 'system', now());
insert into menu value ('MN0006', '아인슈페너 / 아임쑥페너', 'BV', 5500, 99, 'system', now(), 'system', now());