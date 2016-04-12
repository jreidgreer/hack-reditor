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

![Homepage](https://raw.githubusercontent.com/jreidgreer/hack-reditor/screenshots/screenshots/homepage.png =500x313 "Homepage")

###Secured Signup w/ Client Validation

![Secured Signup](https://raw.githubusercontent.com/jreidgreer/hack-reditor/screenshots/screenshots/signup-validation.png =500x313 "Secured Signup")

###Empty Dashboard (Shows Prompt)

![Empty Dashboard](https://raw.githubusercontent.com/jreidgreer/hack-reditor/screenshots/screenshots/dashboard-blank.png =500x313 "Empty Dashboard")

###Document Create Page

![Document Create Page](https://raw.githubusercontent.com/jreidgreer/hack-reditor/screenshots/screenshots/document-create.png =500x313 "Document Create Page")

###Dashboard w/ Updated Content

![Dashboard](https://raw.githubusercontent.com/jreidgreer/hack-reditor/screenshots/screenshots/dashboard.png =500x313 "Dashboard w/ Updated Content")

###Document View Page (Unauthenticated for Sharing)

![Document View Page](https://raw.githubusercontent.com/jreidgreer/hack-reditor/screenshots/screenshots/document-view.png =500x313 "Document View Page")

###Document Edit Page

![Document Edit Page](https://raw.githubusercontent.com/jreidgreer/hack-reditor/screenshots/screenshots/document-edit.png =500x313 "Document Edit Page")