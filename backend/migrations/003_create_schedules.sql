CREATE TABLE schedules (
  id SERIAL PRIMARY KEY,

  user_id INTEGER NOT NULL
    REFERENCES users(id)
    ON DELETE CASCADE,

  schedule_date DATE NOT NULL,

  program_code VARCHAR(20) NOT NULL,
  hour INTEGER NOT NULL CHECK (hour >= 0 AND hour <= 23),
  minute INTEGER NOT NULL CHECK (minute >= 0 AND minute <= 59),

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  UNIQUE (user_id, schedule_date, program_code),
  UNIQUE (user_id, schedule_date, hour, minute)
);