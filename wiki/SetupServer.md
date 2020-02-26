# Setup debian server

## Install Nginx

* Run that command on debian machine:

        sudo apt-get install nginx
        
## Install NPM

* Run that command

        curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
        sudo apt-get install -y nodejs
        npm i http-server -g
        
## Helpful command

* How to start server

        sudo /etc/init.d/nginx start
* How to stop server
        
        sudo /etc/init.d/nginx stop
* How to restart server        
        
        sudo /etc/init.d/nginx restart
        
## Setup nginx.conf

* Create folder `trivago` in `/var/www` 
* Copy dist of angular and put it in `/var/www/trivago`
* Go to `/etc/nginx/sites-available`, create file name `trivago`
* Edit the file to add this
        
            server {
                    listen 80 default_server;
                    listen [::]:80 default_server;
            
                    server_name trivago;
            
                    location / {
                            root   /var/www/trivago;
                            index  index.html index.htm;
                    }
            }
* Go to `/etc/nginx/sites-enabled`, delete link with default and recreate one for trivago
        
        ln -fs ../sites-available/trivago default
* Restart nginx service

## Deploy app

* Copy the content of app directory inside `/var/www/trivago`