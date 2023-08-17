-- Deploy webmaster-migrator:004-create-cours-session-table to pg

BEGIN;

CREATE TABLE webmasters.course_sessions (
    id serial NOT NULL,
    name VARCHAR(255) NOT NULL,
    start_date TIMESTAMPTZ NOT NULL
);

COMMIT;
