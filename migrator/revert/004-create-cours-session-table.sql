-- Revert webmaster-migrator:004-create-cours-session-table from pg

BEGIN;

DROP TABLE webmasters.course_sessions;

COMMIT;
