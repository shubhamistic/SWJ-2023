# SWJ-2023 Backend

## Developed by, [@shubhamistic](https://github.com/shubhamistic)

## SETUP (Ubuntu)

- SSH into your vpc using security key:
  ```bash
  ssh -i path-to-your-pem-file.pem ubuntu@ip-address
  ```

- Install NGINX:
  ```bash
  sudo apt update
  
  sudo apt install nginx
  
  sudo apt-get install google-chrome-stable
  chmod +x chromedriver
  ```

- Open nginx configuration file:
  ```bash
  sudo nano /etc/nginx/sites-available/default
  ```

- Clear the contents of the file and add the following lines (SAVE & EXIT):
  ```
  $ server {
    server_name <domain.com> <vpc-ip-address>;
    location / {
        include proxy_params;
        proxy_pass http://localhost:5000;
    }
  }
  ```

- Open bash profile:
  ```bash
  sudo nano ~/.bash_profile
  ```

- Append these lines inside bash profile (SAVE & EXIT):
  ```
  export DB_HOST="<db-hostname>"
  export DB_USER="<db-username>"
  export DB_PASS="<db-password>"
  export WEB_HOST="<your-web-hosting-domain-name>"
  export GOOGLE_CLIENT_SECRET_PATH="<path-to-google-client_secret.json>"
  export WEBDRIVER_PATH="<path-to-google-chrome-webdriver>"
  ```
  
- Execute commands from a bash_profile in current shell environment:
  ```bash
  source ~/.bash_profile
  ```

- **MySQL DATABASE CONFIGURATION**
  ```bash
  CREATE DATABASE swj2023;
    
  USE swj2023;
    
  CREATE TABLE records (
    p_uuid VARCHAR(36) PRIMARY KEY,
    p_name TEXT,
    p_mob_num TEXT,
    p_email TEXT,
    p_workplace TEXT,
    p_city TEXT,
    p_age TEXT,
    p_gender TEXT,
    p_transaction_id TEXT,
    p_mail_status boolean DEFAULT false,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  
  CREATE TABLE auth(
    pass TEXT NOT NULL,
    access TEXT NOT NULL
  );
  
  COMMIT;
  ```

- Install gunicorn & gevent-websocket in global environment:
  ```bash
  pip install gunicorn gevent-websocket
  ```
  
- Activate virtualenv and install the modules:
  ```bash
  virtualenv project-directory
  
  cd project-directory
  
  source bin/activate
  
  pip install -r requirements.txt
  ```
  
- Download chrome web driver
  [CLICK HERE](https://chromedriver.storage.googleapis.com/index.html?path=114.0.5735.90/)

- Run the server using:
  ```bash
  gunicorn --bind 127.0.0.1:5000 app:app
  ```
