-- Verify webmaster-migrator:003-add-creation-date-to-user on pg

BEGIN;

SELECT created_date FROM webmasters.users;

ROLLBACK;
