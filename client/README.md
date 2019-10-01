# MEAN Final Project

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

## Site Pages:
- Home Page - Can always be seen.
http://localhost:4200/
- Login Page - Can only be seen if the user is not logged in.
http://localhost:4200/login
- Register Page - Can only be seen if the user is not logged in.
http://localhost:4200/register
- Edit Page (Update User Email - cannot access unless logged in)
http://localhost:4200/edit
- Leagues Page (Landing Page - cannot access unless logged in)
http://localhost:4200/leagues
- Admin Page (Shows all non-admin users - cannot access unless logged in and user is an admin)
http://localhost:4200/admin

> NOTE: Any page that is only accessable to a logged-in is checked on the server to make sure that the user is authenticated. The user is set as authenticated once they login.  
> 
> This effectively prevents a non-logged-in user from accessing pages
> that should only be available to logged-in users.  In addition, if the page requires the user to be an admin this is also checked on the server and set once the user is logged in. The user is routed back to the login page.

# Steps to create
+ In the Terminal, in the client dir, execute the following:
```
$ ng new client
...
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
CREATE client/angular.json (3409 bytes)
CREATE client/package.json (1277 bytes)
...
Project 'client' successfully created.
$ 
```


## Modify App 
+ In the Terminal, in the client dir, execute the following to install Bootstrap:
```
npm install bootstrap jquery poppet angular-bootstrap --save
```

+ Open .angular.json and modify the "styles" property to the following

```
  "styles": [
          "./node_modules/bootstrap/dist/css/bootstrap.min.css",
          "styles.css"
        ]
```

## Load App
```
$ cd client
$ ng serve
...
webpack: Compiled successfully.
```
- To view the home page in the browser, you would go to:
http://localhost:4200/

# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Technologies
- HTML5/CSS3/Bootstrap4
- Angular
- Node.js

## Special Thanks
- Pam (https://github.com/WildKnitter) for an awesome readme template.