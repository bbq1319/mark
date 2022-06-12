-- USER
INSERT INTO USER (user_id, user_name, password, use_flag) VALUES('US0001', '관리자', '5ffc9fd4d0657f0d70efce171ebfd9daf2cdb5e760833af03e83de97af9a5e05', 'true');
INSERT INTO USER (user_id, user_name, password, use_flag) VALUES('US0002', '김민섭', '5ffc9fd4d0657f0d70efce171ebfd9daf2cdb5e760833af03e83de97af9a5e05', 'true');

-- USER_ROLES
INSERT INTO USER_ROLES (user_id, roles) VALUES('US0001', 'ROLE_ADMIN');
INSERT INTO USER_ROLES (user_id, roles) VALUES('US0001', 'ROLE_USER');
INSERT INTO USER_ROLES (user_id, roles) VALUES('US0002', 'ROLE_ADMIN');
INSERT INTO USER_ROLES (user_id, roles) VALUES('US0002', 'ROLE_USER');