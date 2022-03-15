CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(75) NOT NULL,
  last_name VARCHAR(75) NOT NULL,
  username VARCHAR(150) UNIQUE NOT NULL,
  position VARCHAR(150) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  passhash VARCHAR(150) NOT NULL,
  company_id INT NOT NULL
);

CREATE TABLE company (
  id BIGSERIAL PRIMARY KEY,
  contractor_license VARCHAR(15) UNIQUE NOT NULL,
  company_name VARCHAR(155) NOT NULL,
  company_state VARCHAR(50) NOT NULL,
  company_country VARCHAR(50) NOT NULL
);

CREATE TABLE project (
  id BIGSERIAL PRIMARY KEY,
  project_name VARCHAR(155),
  project_start_date date NOT NULL,
  project_end_date date NOT NULL,
  company_id INT NOT NULL
);

CREATE TABLE lending (
  id BIGSERIAL PRIMARY KEY,
  company_id INT NOT NULL,
  loan_amount MONEY NOT NULL,
  approved BOOLEAN NOT NULL
);

ALTER TABLE users ADD FOREIGN KEY (company_id) REFERENCES company(id);

ALTER TABLE lending ADD FOREIGN KEY (company_id) REFERENCES company(id);

ALTER TABLE project ADD FOREIGN KEY (company_id) REFERENCES company(id);

