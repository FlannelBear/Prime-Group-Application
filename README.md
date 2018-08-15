# Team Certain Clean

## Getting Started

- Create a project folder on your local system
- git init to initialize your local repo
- Copy the url of this repo
- Use the "git clone" command in your command line tool, and paste the url in after the command
- Now the repo is on your system.  Follow the instructions below to deploy to Heroku.

## Deployment to Heroku

>Heroku

Heroku is a hosting website that allows users to push up project folders and get set up with a url for potential users to navigate to.  

The base use of Heroku is free, however there are some features and parameters that would cost money.

Heroku's pricing details can be found [here](https://www.heroku.com/pricing).

Some examples of their pricing include:
- If you want you app to not take 30 seconds to spin up the first time someone goes to it, you will need to pay $7/month for a heroku dyno
- If you want your app to hold 10,000 users (which might translate to a million rows of total SQL information) then you will need to pay $9/month for a million database rows.

>How To Deploy

There are a number of steps you'll need to follow to deploy to Heroku if that is what you choose to do.  By all means, if you wish to use a different hosting service you may.

- Heroku Prerequisites
    - Sign up for an account on Heroku.com
    - Install Heroku CLI (In this example you can use HomeBrew, if it's installed, by typing brew install heroku in Terminal, or your command line tool).
    - Authenticate by typing heroku login in your command line tool.
    Note: Your project also needs to have a git repository.

- Heroku Setup
    - Before you deploy, make sure your server port (found [here](server/server.js)) is configured correctly as:
    
    ```var port = process.env.PORT || 5000;```

    - Run the following commands from within your project folder.
        - In terminal, navigate to your project folder and type heroku create
        - Login in if prompted using the credentials you created your Heroku account with.
        - Type git remote -v to ensure it added successfully
        - In terminal, type git push heroku master
        - Our website is now live! However... we also have a database

- Postgresql on Heroku
    - In terminal, type heroku addons:create heroku-postgresql:hobby-dev to set up Postgresql on your Heroku project
    - Next, type heroku pg:push your_database DATABASE_URL to copy your database contents up to Heroku. your_database is the actual name of your database (e.g. Certain_Clean). DATABASE_URL is a heroku config variable created by the Add On. Do not replace it with something else, just type: DATABASE_URL. For example, if you were deploying the Certain_Clean database, you should type heroku pg:push koala_holla DATABASE_URL
    - Update or create a module for your pg-pool configuration to the following code that will convert the heroku DATABASE_URL into a pool config object. The only line you should have to change is database: process.env.DATABASE_NAME || 'your_database'. Change your_database to the actual name of your database. (e.g. database: process.env.DATABASE_NAME || 'Certain_Clean').  The pool file can be found [here](/server/modules/pool.js).