legacy-forwarder
================

This is simply a forwarder to serve /dan and /steve (legacy)

Running Locally
---------

Install dependencies:

    $ npm install
    $ npm prune

Run foreman server:

    $ foreman start


Deploying
---------

Login and create the heroku remote:

    $ heroku login
    $ heroku create

Set the config variables: 

    $ heroku config:set DAN_ENDPOINT=http://someurl
    $ heroku config:set STEVE_ENDPOINT=http://otherurl

Deploy the app:

    $ git push heroku master


Monitoring
---------

View the dynos:

    $ heroku ps

View the logs:

    $ heroku logs

View the app:

    $ heroku open
