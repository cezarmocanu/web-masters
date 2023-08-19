-- Revert webmaster-migrator:0005-add-password-hash-and-is-active-to-user from pg

BEGIN;


ALTER TABLE webmasters.users
DROP COLUMN IF EXISTS password_hash,
DROP COLUMN IF EXISTS is_active;

COMMIT;
