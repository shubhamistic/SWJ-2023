# MySQL DATABASE CONFIGURATION

- **SWJ-2023:**
  ```bash
  CREATE DATABASE swj2023;
    
  USE swj2023;
    
  CREATE TABLE records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL,
    team TEXT NOT NULL,
    phone VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    workPlace TEXT NOT NULL,
    city TEXT NOT NULL,
    age TEXT NOT NULL,
    gender TEXT NOT NULL,
    transactionId VARCHAR(255) NOT NULL UNIQUE,
    mailStatus boolean DEFAULT false NOT NULL,
    paymentStatus boolean DEFAULT false NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
  );
  
  CREATE TABLE auth (
    pass TEXT NOT NULL,
    access TEXT NOT NULL
  );
  
  CREATE TABLE mail_records (
    record_id INT NOT NULL PRIMARY KEY,
    mail_id VARCHAR(36) NOT NULL
  );
  
  COMMIT;
  ```