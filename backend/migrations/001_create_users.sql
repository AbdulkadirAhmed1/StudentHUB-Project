--CREATE--

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id            SERIAL      PRIMARY KEY,
  name          TEXT,
  yearofstudy   VARCHAR(20) NOT NULL,
  department    VARCHAR(100) NOT NULL,
  major         VARCHAR(100) NOT NULL DEFAULT 'N/A',
  password      TEXT        NOT NULL,
  username      VARCHAR(50) UNIQUE NOT NULL
);