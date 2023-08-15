-- Deploy webmaster-migrator:0002-create-user-table to pg

BEGIN;

CREATE TABLE webmasters.users (
    id serial NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

COMMIT;
