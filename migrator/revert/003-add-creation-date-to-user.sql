-- Revert webmaster-migrator:003-add-creation-date-to-user from pg

BEGIN;

ALTER TABLE webmasters.users
DROP created_date;

COMMIT;
