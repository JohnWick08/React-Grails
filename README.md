This project contains a react front-end and grails backend.

Font-end: it has a form and will when submitted, it will send the data to localhost 8080 with a post command.

Back-end: it will process the post request and send the data to the local mongoDB.

Java 8, Mongo 4.24, grails 3.3.3



Front-end Steps:
1. Setup the react front-end
   npx create-react-app xxx

2. Start the project 
   npm start

3. Create a component called postForm
	write the form component, and create onChange handler and submit handler.

4. Add pictures, decorate.

Back-end Steps:
article:https://www.djamware.com/post/585efdd480aca7486e42ffc7grails-3-and-mongodb-tutorial
1. create new project
	grails create-app appName

2. comment out all the dependencies and plugins that is related with hibernate, and add dependencies for mongodb. in the file build.gradle

	compile "org.grails.plugins:mongodb"
    // compile "org.grails.plugins:hibernate4"
    // compile "org.hibernate:hibernate-ehcache"
    // classpath "org.grails.plugins:hibernate4:5.0.10"

3. in application.yml, add mongodb infos and comment out hibernate.

4. Create domain, user.
	create-domain-class com.userstore.User

5. Generate CRUD scaffolding for this domain, it will generate all the controllers, services, view, mappng for the user.
	generate-all com.bookstore.Book

6. To run the back-end, grails run-app