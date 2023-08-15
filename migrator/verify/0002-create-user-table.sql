-- Verify webmaster-migrator:0002-create-user-table on pg

BEGIN;

SELECT * FROM webmasters.users;
-- XXX Add verifications here.

ROLLBACK;
