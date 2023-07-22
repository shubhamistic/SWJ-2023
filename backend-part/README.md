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
  ```

- Open nginx configuration file:
  ```bash
  sudo nano /etc/nginx/sites-available/default
  ```

- Clear the contents of the file and add the following lines (SAVE & EXIT):
  ```
  server {
    server_name <example.com> <vpc-ip-address>;
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
  export SECRET_KEY="<secret-key>"
  export WEB_HOST="<example.com>"
  export GOOGLE_CLIENT_SECRET_PATH="<path-to-google-client_secret.json>"
  ```
  
- Execute commands from a bash_profile in current shell environment:
  ```bash
  source ~/.bash_profile
  ```

- Setup MySQL database configuration
  - [*click here*](/models)

- Install gunicorn & gevent-websocket in global environment:
  ```bash
  pip install gunicorn gevent-websocket
  ```
  
- Activate virtualenv and install the modules:
  ```bash
  sudo apt install python3-virtualenv
  
  virtualenv project-directory
  
  cd project-directory
  
  source bin/activate
  
  pip install -r requirements.txt
  ```

- Run the server using:
  ```bash
  gunicorn --bind 127.0.0.1:5000 app:app
  ```
