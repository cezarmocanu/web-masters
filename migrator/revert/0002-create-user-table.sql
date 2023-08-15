-- Revert webmaster-migrator:0002-create-user-table from pg

BEGIN;

DROP TABLE webmasters.users;

COMMIT;
