
<p align="center">
  <a href="" rel="noopener">
 <img width=150px height=150px src="https://www.hackyourfuture.dk/static/logo-dark.svg" alt="Project logo"></a>
</p>

<h3 align="center">Boilerplate for Final projects
</h3>



---

## 📝 Table of Contents

- [About](#about)   
        - [Setting up the boilerplate](/setting-up-instructions.md)   
        - [Plan the project](/planning.md)
- [Project's Calendar](#-projects-calendar)   
- [Class Daily Agenda](#-class-daily-agenda-)   
- [The Customer](#-the-customer)   
        - [Business Glossary](/BusinessGlossary.md)   
        - [Database Model Diagram](#️-database-model-diagram)   
- [Process](#-process-)   
        - [Working with code](#-working-with-code)   
        - [Code best practices](#-code-best-practices)        
        - [Working with GIT](/working-with-git.md)    
        - [Working with Heroku and Deployment](/deployment.md)  
        - [Working Knex and migrations](/knex-and-migrations.md)   
        - [Working with API Documentation - Swagger](#working-with-api-documentation---swagger)   
        - [Working with Storybook](#working-with-storybook)   
        - [Working with AWS - Amazon Services](#working-with-aws---amazon-services)
        - [Testing](#testing)
- [Getting Started](#getting-started)   
        - [Installations](/installations.md)
        - [Code linting](#code-linting)
- [Getting the certificate](/certificate.md)      
- [Authors](#authors)   
- [License](#license)   



## 🧐 About <a name = "about"></a>

This repository is a boilerplate and set-up instructions for the Final Project.

To setup the boilerplate for a New Final project you MUST read this first [HERE](/setting-up-instructions.md)

After the previous steps, you have new repository ready but you need plan the project, 
check [HERE](/planning.md) before you go more down.

🚨Delete the About Topic from you new repository README.MD file     
🚨Delete the instructions files:    
- [Setting up Instructions](/setting-up-instructions.md)     
- [Planning](/planning.md)    

## ⛏️ Built Using <a name = "built_using"></a>

- [React](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [MySQL](https://www.mysql.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
      - Server and Client side structure  
- [Knex](http://knexjs.org/) - Database management
- [Swagger](https://swagger.io/) - API Documentation
- [Storybook](https://storybook.js.org/) - Tool for developing UI components in isolation 
- [Prettier](https://prettier.io/) - Code formatter

     

## 📅 Project's Calendar

*Add the dates for the project and study groups*
*Class Dates*   
*Study groups dates*    


## 🕛 Class Daily Agenda 🕓

*Add the Class schedule for the project*

- 12:00 - 13:30 - ...   
- 13:30 - 14:00 - ...   
- 14:00 - 14:30 - Lunch   
- 14:30 - 16:00 - ...   

## 👩🏻‍💼💡👨🏽‍💼 The Customer 

*Add here information about the customer/partner*

#### 💼 Business Glossary

*Add here information about the Business Glossary*
[Business Glossary](/BusinessGlossary.md)

#### 🗄️ Database Model Diagram

*Add here the DB Model Diagram* - Use https://dbdiagram.io/

- [How to make changes on the diagram](/diagram.md)



## 📈 Process 📉📈

### 💻 Working with code

- ALWAYS run code before a PR is made.
- No committing `console.log`
- No committing merge conflicts!
- Work in separate files! When you make a new feature, the first thing you do is create a new file for that (of course if it makes sense). Especially for components. 

### 👍🏽 Code best practices
Follow these best practices for coding: [HERE](https://github.com/HackYourFuture-CPH/curriculum/blob/master/review/review-checklist.md)

This can be used as a checklist for every PR you make. Go through the list and see if you have used all the best practices

###  <img width=20px height=20px src="/git-logo.png" alt="GitHub logo"></a> Working with GIT   
[Working with GIT](/working-with-git.md)   
 
###  <img width=15px height=30px src="/heroku-logo.svg" alt="Heroku logo"></a> Working with Heroku and Deployment
[Working with Heroku and Deployment](/deployment.md)
  
###  <img width=59x height=20px src="/knex-logo.png"  alt="Knex logo"></a> Working with Knex and Migrations
[Working Knex and migrations](/knex-and-migrations.md)   
  
  
###  <img width=25px height=25x src="/swagger-logo.png"  alt="Swagger logo"></a> Working with API Documentation - Swagger

When running the API, you will automatically be running the API Documentation
which is based on Swagger. Just go to
[localhost:3000/api/documentation](http://localhost:3000/api/documentation) to
read the specifications for the API.

You can use your api token to authorize in Swagger and you will be able to
perform test calls against the API directly from Swagger.

If you need to make changes to the specification, this can be done via the
[Swagger.json](/src/server/config/swagger.json) file.

### <img width=20px height=20x src="/storybook.svg"  alt="Storybook logo"></a> Working with Storybook 
Tool for developing UI components in isolation 

Check here https://storybook.js.org/

### <img width=30px height=30x src="/aws.svg"  alt="AWS S3 logo"></a><img width=30px height=30x src="/s3.png"  alt="AWS S3 logo"></a> Working with AWS - Amazon Services
AWS is used for uploading files on a AWS S3 bucket. There is a user on the AWS that has `AmazonS3FullAccess`. There is not a AWS root key, but ONLY a key and a secret key for the AWS user. 

If you need the key and secret to put into the .env file, write to the project manager of the project. 

REMEMBER, this key should be kept super secret!!! NEVER add this to any PR!!

### Testing

To make a new test, add a `COMPONENT_NAME.test.js` to a component. See fx the `Home` component to get an example of a simple test.

To run all test, write this command:

`npm run test`

To run the tests when you change a test file, run:

`npm run test:watch`

## 🏁 Getting Started
First clone the repo on your local machine using a terminal or a git client.

#### 💾 [Installations](/installations.md)

##### Errors
If you get this error: `Error: ENOENT: no such file or directory, scandir`

Then try and run this script: `npm rebuild node-sass`

#### Code linting

To ensure we all code the same way, we are using linting in this project! We use prettier to do the linting for us. To Use the linting in this project, set your code editor up with the `.prettierrc.js` files. 

In Visual Studio code, go to file -> Preferences -> settings -> Search for `prettier: config path` -> In the input write `.prettierrc.js`

## 📜 [Getting the HackYourFuture certificate](/certificate.md)


## 👨🏾‍💻 Authors

* [**Shanawaz Islam**](https://github.com/h09shais)

### Other contributions

* [**Benjamin Hughes**](https://github.com/benna100)
* [**Zaki Wasik**](https://github.com/zkwsk/)
* [**Filip Malek**](https://github.com/REX500)
* [**Daniel Fernandes**](https://github.com/dpfernandes)


## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


