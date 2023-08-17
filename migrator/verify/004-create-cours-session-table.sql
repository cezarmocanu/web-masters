-- Verify webmaster-migrator:004-create-cours-session-table on pg

BEGIN;

SELECT * FROM webmasters.course_sessions;

ROLLBACK;
