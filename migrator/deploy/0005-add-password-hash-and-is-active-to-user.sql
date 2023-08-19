-- Deploy webmaster-migrator:0005-add-password-hash-and-is-active-to-user to pg

BEGIN;

ALTER TABLE webmasters.users
ADD COLUMN password_hash VARCHAR(255) NOT NULL DEFAULT 'NO_HASH',
ADD COLUMN is_active BOOLEAN NOT NULL DEFAULT TRUE;

COMMIT;
