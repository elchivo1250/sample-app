# SumoMe

### Installation instructions

clone the repository using

    git clone git@github.com:elchivo1250/sumoMe.git

    or 

    git clone https://github.com/elchivo1250/sumoMe.git 

make sure you're running node 0.10.x, then: 

    npm install

    cd node_modules/uswds && npm run-script build-sass && cd ../..

    ./node_modules/.bin/gulp

create mysql database and user if applicable

copy config/config.json.dist to config/config.json

enter mysql connection credentials in config/config.json

Import the database dump in data/sumo_me.sql (I was going to use seeders, but felt it would be faster to simply make a db dump) into your database

Run npm start

#### Notes

I did not create update/destruction functionality. If you would like to see it implemented, let me know, and I'll put it together. 

I used the airbnb-legacy ruleset for eslint when linting my JS. There are a few errors:

1. Routing files have an error because of express.Router() being an uppercase function.
1. public/js/results.js has a few errors related to undefined d3 / $ variables
1. gulpfile.js has a few errors related to the anonymous functions in the list creation section, as well as 1 from an 'unused variable' that is indirectly being used to construct a promise.
