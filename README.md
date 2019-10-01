# MEAN Final Project

![IndexPage](client/src/assets/img/readme_main.jpg?raw=true "IndexPage")

## Site Author
* **Michael Flickinger** - HartCode Academy 2019

## Purpose and goals of this site
- The purpose and goal of this site is to have a full stack web page. The client pages are done via Angular while the back end server is created via node.

# Features!

  - Have 6 different web pages.
    - Home / Index Page - Always seen 
    - Register Page - Only seen when not logged in.
    - Login Page - Only seen when not logged in.
    - Landing / Main Page - Only seen when logged in.
    - Edit User Page - Only seen when logged in.
    - Admin Page - Only seen when logged in as an admin.


## Requirements
  - Utilize Node / Express Server and PostgreSQL.
  - Implement your front-end in Angular - NO HBS.
    - Do not include any client-side JavaScript.
    - Use proper Angular Components, Models, Services.
    - Interact with your back-end (RESTful Routes) using Observables.
 - Server should run on http://localhost:3000
 - Angular client should be served from http://localhost:4200

## Server for Capstone 
- Node/Express/PostgreSQL/Sequelize

### Data Rendered:
- Regions data from JSON in server/data/regions file.
    - http://localhost:3000/leagues/regions
- Leagues data from JSON in server/data/leagues file.
    - http://localhost:3000/leagues/leagues
- Teams data from JSON in server/data/leagues file.
    - http://localhost:3000/leagues/teams
- Users Data from ProsgreSQL file users
    - http://localhost:3000/Users

### PostgreSQL
Note: This will use [PostgreSQL](https://www.postgresql.org/) in place of [MongoDB](https://www.mongodb.com/) for our Database. 

## Server start
+ run ```npm start``` to start the server
+ to run in development mode, to use the debugger, run ```npm run dev``` to start the server
```
$ cd server
$ npm run dev 
```
or
```
$ cd server
$ nodemon start
```
## PostgreSQL Setup
+ Create PostgreSQL DB User as defined above
+ Create a DB named demo in PostgreSQL using [pgAdmin4](http://127.0.0.1:49799/browser/)
+ Execute the following to build and populate the DB with test data
```
$ cd db
$ node migrate
$ node seed
```

## Client start

```
$ cd client
$ ng serve
...
webpack: Compiled successfully.
```

## Getting Started
- To view the home page in the browser, you would go to:
http://localhost:4200/

## Special Thanks
- Pam (https://github.com/WildKnitter) for an awesome readme template.