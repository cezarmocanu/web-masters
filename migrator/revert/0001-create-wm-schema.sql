-- Revert webmaster-db:0001-create-wm-schema from pg

BEGIN;

DROP SCHEMA webmasters;

COMMIT;
