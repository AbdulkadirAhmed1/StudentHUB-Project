-- Insert a test user
INSERT INTO users (
  name,
  yearofstudy,
  department,
  major,
  password,
  username
)
VALUES (
  'Schedule Tester',
  '2nd Year',
  'Engineering',
  'Computer Engineering',
  'hashed_password_placeholder',
  'scheduletest'
);