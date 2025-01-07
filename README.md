# Assignment 2 - Web API.

Name: Jeremiah Casey

## Additional Features.

 + NA

## Setup requirements.

No non-standard setup steps necessary to run my app locally after cloning the repo.

## API Configuration
______________________
NODEENV=development
PORT=8080
HOST=localhost
mongoDB=mongodb://localhost:27017/tasky_db
seedDb=true
secret=ilikecake
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/upcoming | GET | Get all upcoming movies 
- /api/users | Get | Get a list of users
- /api/users?action=register | POST | Register a new user
- /api/users?action=authenticate | POST | Authenticate user


## Security and Authentication

Simple signup and login included in app.

[Public Routes]
"/"
"/login"
"/signup"
"/movies/:id"

[Protected Routes]
"/movies/favorites"
"/reviews/:id">
"/reviews/form"
"/movies/upcoming"
"/movies/popular" 
"/movies/now_playing"

## Integrating with React App

Web API endpoints /api/users and /api/movies were used to:
-Allow a user to register
-Allow a to authenticate
-Use JWT restrict access to the Movies page
-Retain user details and JWT token locally

## Independent learning (if relevant)

N/A