# FoodFolio
## Group W: Milestone 1

 ## What is done:

* React framework and project directory skeleton structure
* Frontend routing between all required pages
* Home page with trending, following and search subpages
* Settings page
* API endpoints have been outlined

## What needs to be done: 

* Incorporate a map package for nearby page
* Implement endpoints
* Utilize fetch API to make the frontend content dynamic
* The nearby, notes, and login pages

## Frontend Pages

Pages   | Status | Wireframe
------- | ------ | ---------
Login   | 0%    | [wireframe]()
Homepage | ✅     |
Following   | ✅     | 
Trending | ✅    | 
Notes | 0% | [wireframe](https://github.ncsu.edu/engr-csc342/csc342-2023Fall-GroupW/blob/main/Proposal/Wireframes/Notes.png)
Nearby   |  0%    | [wireframe](https://github.ncsu.edu/engr-csc342/csc342-2023Fall-GroupW/blob/main/Proposal/Wireframes/MapDishFilter.png)
Settings/Account  | ✅ |
Sidebar | ✅ |

## APIs

Method | Route                 | Description
------ | --------------------- | ---------
`GET` | `/notes/:userID/following`              | Get notes from following
`GET` | `/notes/trending`      | Get trending notes
`GET`  | `/notes/:search`      | Get note from search keyword
`GET`  | `/notes/:noteID`      | Get individual note
`POST`  | `/notes/:noteID`     | Create new note
`PUT`  | `/notes/:noteID`      | Edit note
 | |
`GET`  | `/restaurants/:restID`      | Get restaurant details
`GET`  | `/restaurants/:restID/notes`      | Get restaurant notes
`GET`  | `/restaurants/:restID/reviews`      | Get restaurant reviews
 | |
`GET`  | `/users`      | Get all users for authentification
`POST`  | `/users/:userID`     | Create new user
`PUT`  | `/users/:userID`      | Edit user info

## Individual Contributions

Name | Unity ID | Contributions
-----|----------|--------------
Evan | epkite   | APIs, ReadME
Alex | abkadlof | Frontend
Courtney | ctswartz |
 


