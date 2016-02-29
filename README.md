# SumoMe

* clone the repository using

    git clone git@github.com:elchivo1250/sumoMe.git

    or 

    git clone https://github.com/elchivo1250/sumoMe.git 

* make sure you're running node 0.10.x
* npm install
* cd node_modules/uswds && npm run-script build-sass && cd ../..
* npm install -g gulp
* gulp
* create mysql database and user if applicable
* copy config/config.json.dist to config/config.json
* enter mysql connection credentials in config/config.json
* Import the database dump in data/sumo_me.sql (I was going to use seeders, but felt it would be faster to simply make a db dump) into your database
