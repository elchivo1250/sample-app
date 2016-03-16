# Sample Node Application 

### Installation instructions

clone the repository using

    git clone git@github.com:elchivo1250/sample-app.git

    or 

    git clone https://github.com/elchivo1250/sample-app.git 

make sure you're running node 0.10.x, then: 

    npm install

    cd node_modules/uswds && npm run-script build-sass && cd ../..

    ./node_modules/.bin/gulp

create mysql database and user if applicable

copy config/config.json.dist to config/config.json

enter mysql connection credentials in config/config.json

Import the database dump in data/database_dump.sql (I was going to use seeders, but felt it would be faster to simply make a db dump) into your database

Run npm start
