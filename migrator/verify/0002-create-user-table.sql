-- Verify webmaster-migrator:0002-create-user-table on pg

BEGIN;

SELECT * FROM webmasters.users;

ROLLBACK;
