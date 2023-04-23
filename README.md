# PollingSystemAPI
Its a backend api for registering questions with addtional options. Options have a feature of voting, where the voted option cannot be deleted and the Questions with atleast 1 option with atleast 1 vote cannot be deleted.

Link to access API : http://theonelogic.in:7000/questions

Documentation : http://theonelogic.in:7000/docs

Polling system Features :
  1. Create Questions
  2. Delete Question
  3. Add options to Questions
  4. Add Votes To Options
  5. Remove Votes From Options
  6. JWT Authentication
  7. Option deletion using JWT token


Installation Guide :
  1. Clone repository in your local/remote machine
  2. Run npm install to install all dependencies
  3. Use node commands to start the express server


Usage : 
  1. Run npm start to launch the application.
  2. Connect to the API using Postman on port 7000.
  
 
API Endpoints :
  https://grey-spaceship-41383.postman.co/workspace/Team-Workspace~2bb12cd9-55cc-44da-8a78-90a6df2698b6/collection/15129792-90735d81-75be-4eac-9d93-f81d058ed4f1?action=share&creator=15129792
  
POST 	  http://theonelogic.in:7000/questions/create
POST	  http://theonelogic.in:7000/questions/:id/options/create
DELETE	http://theonelogic.in:7000/questions/:id/delete
GET		  http://theonelogic.in:7000/questions/:id
DELETE	http://theonelogic.in:7000/options/:id/delete
PUT		  http://theonelogic.in:7000options/:id/add_vote
PUT	  	http://theonelogic.in:7000/options/:id/remove_vote
GET	  	http://theonelogic.in:7000/questions/
GET		  http://theonelogic.in:7000/options/:id/view
GET		  http://theonelogic.in:7000/options/
POST	  http://theonelogic.in:7000/auth
GET	  	http://theonelogic.in:7000/docs


Tech stack :
  NodeJS
  ExpressJS
  MongoDB
  Mongoose ODM
  JsonWebToken
  Passport-jwt
