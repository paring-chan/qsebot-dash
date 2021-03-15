CREATE TABLE users
(
    id       TEXT NOT NULL,
    password TEXT NOT NULL
);

ALTER TABLE users ADD shouldChangePassword BOOL NOT NULL DEFAULT false;
