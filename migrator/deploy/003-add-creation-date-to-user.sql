-- Deploy webmaster-migrator:003-add-creation-date-to-user to pg

BEGIN;

ALTER TABLE webmasters.users
ADD COLUMN created_date TIMESTAMPTZ NOT NULL DEFAULT NOW();

COMMIT;
