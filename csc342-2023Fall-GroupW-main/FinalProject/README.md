# FoodFolio
## Group W: Final Project

 ## Brief Project Description

* Uses React and Bootstrap CSS
* Home page with map that renders markers as you pan the map that correspond to restaurants (limited to Wake County)
* Upon clicking on a marker, a popup opens with the restaurant name, average rating, and other characteristics
  * User can add notes to restaurants which contain a dish name, a rating for the dish, and a written description of how they felt about the dish
  * The user can also view a menu for the restaurant which is generated from the notes of all users to get a sense of what various dishes at a restaurant they might be at are like
* User can view a gallery of all their own notes. This feature allows them to track their food experiences/journey

## Authentication and Authorization

* We are using a strategy extremely similar to what was shown in class with JWTs
* Users create an account by entering their first and last name, username, and then a password
  * This data is stored in a database (mariadb), except that the password is salted and hashed
* Users only have access to the system once they are authenticated. This is ensured by using middleware on all routes that should be protected. This middleware checks that the user has a valid JWT in their request cookies. If not, they are redirected to the login page

## Pages

### 1. Login

The user is first prompted with a login screen if they don't have a valid JWT. They can navigate to the signup page if they don't have an account, or enter the credentials and proceed to the homepage.

### 2. Sign Up

The signup form takes the user's information and hashes their password through sha256 and a uniqely generated salt to create their account. After a successful signup, the user is redirected to the login page

### 3. Home

The homepage has a map with markers for restaurants in Wake County. Upon mount, the user can chose to allow the app to use their location (which will then move the map to be centered around there, with the idea being that the user can quickly find the restaurant they are in and make a note for it). These markers can be clicked to reveal the pop-up menu that features the restaurant's details including a rating which is calculated from the average ratings of all the notes created for it. This pop-up also has options to "View Menu" and "Add Note". The homepage features a sidebar to navigate to the user's notes and logout.

#### a. Restaurant Menu

The restaurant menu shows the notes created by different users that correspond with that restaurant. The notes are grouped by dish, and an average rating is calculated for each dish based on the user notes for it.

#### b. Add Note

The user can fill out a form to rate a dish and provide their thoughts and opinions on the dish and how it was served from the specified restaurant.

### 4. My Notes

This page shows the user's own notes from all restaurant. It provides a timeline of meals that they have had while eating out. The user can navigate back to the homepage through the sidebar.

## Endpoints

Method | Route                 | Description
------ | --------------------- | ---------
`GET`  | `/notes/:userID`      | Get the current user's notes
`GET`  | `/notes/:noteID`      | Get individual note
`POST` | `/notes/new`          | Create new note
`PUT`  | `/notes/:noteID`      | Edit note
`DELETE`  | `/notes/:noteID`      | Delete note
 | |
`GET`  | `/restaurants/nearby`      | Get restaurants within map view
`GET`  | `/restaurants/:restID`      | Get restaurant details
`GET`  | `/restaurants/:restID/notes`      | Get restaurant notes
 | |
`POST`  | `/users/login`      | Authenticates user
`POST`  | `/users/logout`     | Removes user token
`POST`  | `/users/signup`      | Create new user
`GET`  | `/users/current`      | Get current user
`GET`  | `/users/:userID`      | Get user details by ID



## DB Schema: 

We had the schema for the user and notes that shared the userID to connect each note to the user that created it. The restaurants were imported and all the resturants in raleigh are served statically, since they will not be changed by users.

## ER Diagram

![foodfolio_db](https://media.github.ncsu.edu/user/19239/files/d9044b8f-5bcb-4b26-a196-a2a07eaec10f)

## Individual Contributions

### Proposal

epkite: Wireframes
abkadlof: Wireframes

### Milestone 1

epkite: Implemented APIs
abkadlof: Initialized react project and created the initial frontend and its pages

### Milestone 2

epkite: Created db schema and configured APIs to serve the new frontend elements and db
abkadlof: Implemented react-leaflet into the project and created endpoints required to have it display data

### Final Project

epkite: Created service worker and implemented the frontend for restaurant and user notes pages 
abkadlof: Created and tweaked api endpoints, finished up most of the frontend and styled/polished it
