-- Verify webmaster-db:0001-create-wm-schema on pg

BEGIN;

SELECT pg_catalog.has_schema_privilege('webmasters', 'usage');

ROLLBACK;
