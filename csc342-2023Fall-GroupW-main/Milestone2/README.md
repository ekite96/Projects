# FoodFolio
## Group W: Milestone 2

 ## What is done:

* React framework and project directory skeleton structure
* Frontend routing between all required pages
* Home page with trending, following and search subpages
* Settings page
* API endpoints have been outlined
* Incorporate a map package for nearby page
* Implement endpoints
* Utilize fetch API to make the frontend content dynamic

## What needs to be done: 

* The nearby, notes, and login pages

## Frontend Pages

Pages   | Status | Wireframe
------- | ------ | ---------
Login   | ✅   | 
Homepage | ✅     |
User Notes | 0% | [wireframe](https://github.ncsu.edu/engr-csc342/csc342-2023Fall-GroupW/blob/main/Proposal/Wireframes/Notes.png)
Nearby   |  0%    | [wireframe](https://github.ncsu.edu/engr-csc342/csc342-2023Fall-GroupW/blob/main/Proposal/Wireframes/MapDishFilter.png)
Restaurant Notes   |  0%    | [wireframe]()
Settings/Account  | ✅ |
Sidebar | ✅ |

## APIs

Method | Route                 | Description
------ | --------------------- | ---------
`GET` | `/notes/:userID`              | Get notes from user
`GET`  | `/notes/:noteID`      | Get individual note
`POST`  | `/notes/new`     | Create new note
`PUT`  | `/notes/:noteID`      | Edit note
`DELETE`  | `/notes/:noteID`      | Delete note
 | |
 `GET`  | `/restaurants/all`      | Get all restaurant details
`GET`  | `/restaurants/:restID`      | Get restaurant details
`GET`  | `/restaurants/:restID/notes`      | Get restaurant notes
 | |
`POST`  | `/users/login`      | Authenticate
`POST`  | `/users/signup`     | Create new user
`POST`  | `/users/logout`     | Log Out
`PUT`  | `/users/:userID`      | Edit user info

## Individual Contributions

Name | Unity ID | Contributions
-----|----------|--------------
Evan | epkite   | APIs, ReadME
Alex | abkadlof | Frontend
Courtney | ctswartz |
 


