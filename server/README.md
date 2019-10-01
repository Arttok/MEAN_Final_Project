# MEAN Final Project

## Site Author
* **Michael Flickinger** - HartCode Academy 2019

## Data Rendered:

+ **Users Data from ProsgreSQL file users**
+ **Region Data from JSON file leagues**
+ **League Data from JSON file leagues**
+ **Team Data from JSON file leagues**

- Get all Users
GET: http://localhost:3000/Users

- Get all Regions
GET: http://localhost:3000/leagues/regions

- Get all Leagues
GET: http://localhost:3000/leagues/leagues

- Get all Teams
GET: http://localhost:3000/leagues/teams

- Post for Login. 
POST http://localhost:3000/users/signin

- Post for Register.
POST http://localhost:3000/users/register

- Put users for editing email.
PUT http://localhost:3000/users/

- Delete A User.
DELETE http://localhost:3000/users/:ID


### PostgreSQL

Note: This will use [PostgreSQL](https://www.postgresql.org/) in place of [MongoDB](https://www.mongodb.com/) for our Database. 

This example assumes a PostgreSQL User with the following
+ username: hca
+ password: password
+ creds: DBA


## Server and app setup and start
- This assumes that the user has Node.js installed globally on their machine.
```
$ mkdir server
$ cd server
$ npm init
$ npm install 
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

## Test
+ run ```npm start``` to start the server
+ to run in development mode, to use the debugger, run ```npm run dev``` to start the server
+ Test using Postman Collection:
    + MEAN_Final_Project.postman_collection

### Input and Outputs for Testing:
**POST Login**
POST http://localhost:3000/users/signin
Input:
```
user_name: req.body.username
user_password: req.body.password
```
Output (Positive):
```
{
    "id": 1,
    "user_name": "Admin",
    "user_password": "password",
    "email": "Admin@admin.com",
    "is_admin": 1,
    "createdAt": "2019-09-26T16:30:22.282Z",
    "updatedAt": "2019-09-30T21:11:06.290Z"
}
```

Output (Negative):
```
{
    "error": "No User found"
}
```

**POST Register**
POST http://localhost:3000/users/register
Input:
```
user_name: req.body.user_name
user_password: req.body.user_password
email: req.body.email
is_admin: req.body.is_admin
```
Output (Positive):
```
{
    "id": 11,
    "user_name": "Testing",
    "user_password": "passTest",
    "email": "Testing@test.com",
    "is_admin": 1,
    "updatedAt": "2019-10-01T13:45:05.623Z",
    "createdAt": "2019-10-01T13:45:05.623Z"
}
```
Output (Negative):
```
{
    "error": "User not created"
}
```

**EDIT user**
PUT http://localhost:3000/users/
Input:
```
id: req.body.id
user_name: req.body.username
email: req.body.email
```
Output (Positive):
```
[
    1
]
```
Output (Negative):
```
[
    0
]
```

**DELETE user**
DELETE http://localhost:3000/users/[Enter ID Number Here]
Output (Positive):
```
1
```
Output (Negative):
```
0
```

**GET User Data**
GET http://localhost:3000/Users

Output (Positive):
```
{
        "id": 3,
        "user_name": "BizBaz",
        "user_password": "bazBiz",
        "email": "BizBaz@admin.com",
        "is_admin": 0,
        "createdAt": "2019-09-26T16:30:22.282Z",
        "updatedAt": "2019-09-26T16:30:22.282Z"
    },
    {
        "id": 6,
        "user_name": "LoremIpsum",
        "user_password": "password",
        "email": "Lorum@test.com",
        "is_admin": 0,
        "createdAt": "2019-09-27T15:03:07.531Z",
        "updatedAt": "2019-09-27T15:03:07.531Z"
    },
    {
        "id": 1,
        "user_name": "Admin",
        "user_password": "password",
        "email": "Admin@admin.com",
        "is_admin": 1,
        "createdAt": "2019-09-26T16:30:22.282Z",
        "updatedAt": "2019-09-30T21:11:06.290Z"
    },

Etc.
```
Output (Negative):
```
No Users found
```

**GET Region Data**
GET http://localhost:3000/leagues/regions
Output (Positive):
```
[
    {"Name": "European", "Code": "EU"},
    {"Name": "North America", "Code": "NA"}
]
```
Output (Negative):
```
[]
```

**GET League Data**
GET http://localhost:3000/teams/data
Output (Positive):
```
[
	{
		"Name": "WoW Spring EU Cup",
		"Code": "WoW-EU",
        "Description": "This is for the World of Warcraft Spring EU Cup. Only EU teams are allowed.",
		"Region": "EU",
		"MaxTeamMembers": 7
		
        
	},
	{
		"Name": "WoW Spring NA Cup",
		"Code": "WoW-NA",
        "Description": "This is for the World of Warcraft Spring NA Cup. Only NA teams are allowed.",
        "Region": "NA",
		"MaxTeamMembers": 8
	},
	{
		"Name": "WoW Spring Global Cup",
		"Code": "WoW-Global",
        "Description": "This is for the World of Warcraft Spring Global Cup. Teams for all regions are allowed.",
        "Region": "All",
		"MaxTeamMembers": 5
	},
Etc.
```
Output (Negative):
```
[]
```

**Get Team Data**
GET http://localhost:3000/leagues/teams
Output (Positive):
```
[
  {
    "TeamId": 3,
    "TeamName": "Team Liquid EU",
    "League": "League-EU",
    "ManagerName": "Roman Paley",
    "ManagerPhone": "555-123-2468",
    "ManagerEmail": "Roman.Paley@fake.com",
    "MaxTeamMembers": 5,
    "MinMemberAge": 0,
    "MaxMemberAge": 100,
    "TeamGender": "Female",
    "Region": "EU",
    "Members": [
      {
        "MemberId": 100,
        "Email": "MinD_ContRoL@aol.com",
        "MemberName": "MinD_ContRoL",
        "ContactName": "Ivan Borislavov",
        "Age": 27,
        "Gender": "Female",
        "Phone": "852-456-7531",
        "Region": "EU"
      }
    ]
  },
  {
    "TeamId": 106,
    "TeamName": "Testing",
    "League": "WoW-Arena",
    "ManagerName": "Mike",
    "ManagerPhone": "860-836-7682",
    "ManagerEmail": "Mike.A.Flickinger@gmail.com",
    "MaxTeamMembers": 6,
    "MinMemberAge": 19,
    "MaxMemberAge": 80,
    "TeamGender": "Female",
    "Region": "All",
    "Members": []
  },

Etc.
```
Output (Negative):
```
[]
```

## Technologies
- HTML5/CSS3/Bootstrap4
- JavaScript
- jQuery
- Node.js
- ProgreSQL

## Special Thanks
- Pam (https://github.com/WildKnitter) for an awesome readme template.
