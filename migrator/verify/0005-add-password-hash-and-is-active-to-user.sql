-- Verify webmaster-migrator:0005-add-password-hash-and-is-active-to-user on pg

BEGIN;

SELECT password_hash, is_active FROM webmasters.users;

ROLLBACK;
