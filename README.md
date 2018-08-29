# Prime Group Application

## Elevator Pitch

Our client, "Certain Clean" needed to revamp their process for acquiring new customers. They also needed an application that would be able to scale and handle the addition of new features, and an increase in customer demand.

Myself and a team of three other developers scoped this application for one week, and then built the application in one sprint spanning two weeks.

The result was a reliable and reusable process for new and existing customers to request a highly customized cleaning.  The application also gave the customer instant feedback about how long their cleaning would take, and gave them the autonomy to schedule the cleaning within Certain Clean's availability.  The admin portal equipped Certain Clean with the tools necessary to change this application as customer needs shift, making it flexible and adaptive.  Finally, the preliminary ground work was laid to allow Certain Clean to add new features to the application with relative ease.

## Tech Stack
- Reactjs
- Nodejs
- PostgreSQL
- ReactBigCalendar
- MaterialUI
- Parallax

## See It In Action

If you'd like to run this application on your local system, download this repo as a zip file.
1. Navigate to the root folder of the project after opening the zip file.
2. Here you have two options:
  - This project contains a bash script that can spool together the project on its.  To do this, you can execute the bash file in the root folder called "spool-project".
  - If you'd prefer not to run the script, you can run the following commands in your command line while in the root directory of this project:
    * postgres (run a PostgreSQL database)
    * npm run server (start the node server)
    * npm run client (start the client)
    
(To end all processes you'll need to press Ctrl + C twice)

OR

This application is currently deployed to [Heroku](https://damp-cliffs-99667.herokuapp.com/#/home).

In order to see all the features you'll need a couple things:
1. In order to view the "Admin Portal" of the application, you'll need to navigate to "/login", or you can click [here](https://damp-cliffs-99667.herokuapp.com/#/login).
2. The username and password are "admin" for this example application.
