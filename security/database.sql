CREATE TABLE users (
  username VARCHAR PRIMARY KEY,
  password VARCHAR NOT NULL
);

INSERT INTO users VALUES ('johndoe', '$2y$10$YJSmvMjNCHkJjH.3zQ8ciOd5ZeLRK4AdwNgpmBhokBqvohs6DCg0i'); -- 1234
INSERT INTO users VALUES ('janedoe', '$2y$10$d87oQtfTGogR0l6XZ8OElujKvEcSDzBt4YxcVjjKDEHk2egW8C1aq'); -- password
INSERT INTO users VALUES ('marydoe', '$2y$10$XKzBpsg9ga8X03bhm9z10eax8cLNW5TKZ6Da1rlBehgPrr9V5T3Fi'); -- 123456
INSERT INTO users VALUES ('jackdoe', '$2y$10$7Vd0hACPOW/kAJyPwlLmmOv7R.9Gi2EcEAhvfybdFdHo0n5B/JfB.'); -- 123456