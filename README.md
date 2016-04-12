#Hack Reditor
##Summary
A simple text editor and document management system built on the MEAN stack with user authentication and custom styling. 
##Tech Used
* MEAN: MongoDB, Express, AngularJS, NodeJS
* Bootstrap 3
* Mongoose ODM
* Javascript Web Tokens (JWT)
* Local Storage for storing user context.
* Angular Modules:
	* textAngular
	* ngRoute

##Database Schema
* Users Model
	* Users Controller
* Documents Model
	* Documents Controller
	
##Installation
* Run `npm install` in the root directory.
* Run `bower install` in the root directory.
* Start or ensure an instance of `mongod` is running.
* In the Mongo shell, type `use hackreditor` to create the DB.
* Finally, run `npm test` in the main directory to boot up the server. Watch the console for the port number (`4568` by default). 

##Screenshots
###Homepage
<img src="https://raw.githubusercontent.com/jreidgreer/hack-reditor/screenshots/screenshots/homepage.png" width="500" height="313">

###Secured Signup w/ Client Validation
<img src="https://raw.githubusercontent.com/jreidgreer/hack-reditor/screenshots/screenshots/signup-validation.png" width="500" height="313">

###Empty Dashboard (Shows Prompt)
<img src="https://raw.githubusercontent.com/jreidgreer/hack-reditor/screenshots/screenshots/dashboard-blank.png" width="500" height="313">

###Document Create Page
<img src="https://raw.githubusercontent.com/jreidgreer/hack-reditor/screenshots/screenshots/document-create.png" width="500" height="313">

###Dashboard w/ Updated Content
<img src="https://raw.githubusercontent.com/jreidgreer/hack-reditor/screenshots/screenshots/dashboard.png" width="500" height="313">

###Document View Page (Unauthenticated for Sharing)
<img src="https://raw.githubusercontent.com/jreidgreer/hack-reditor/screenshots/screenshots/document-view.png" width="500" height="313">

###Document Edit Page
<img src="https://raw.githubusercontent.com/jreidgreer/hack-reditor/screenshots/screenshots/document-edit.png" width="500" height="313">