
<p align="center">
  <a href="" rel="noopener">
 <img width=150px height=150px src="https://www.hackyourfuture.dk/static/logo-dark.svg" alt="Project logo"></a>
</p>

<h3 align="center">Boilerplate for Final projects
</h3>

---

## 📝 Table of Contents

- [About](#about)   
- [Project's Calendar](#projects-calendar)   
- [Class Daily Agenda](#class-daily-agenda)   
- [The Customer](#the-customer)   
        - [Business Glossary](/BusinessGlossary.md)   
        - [Database Model Diagram](#️database-model)   
- [Process](#process)   
        - [Working with code](#working-with-code)   
        - [Code best practices](#code-best-practices)        
        - [Working with GIT](/working-with-git.md)    
        - [Working with Heroku and Deployment](/deployment.md)   
        - [Working with API Documentation - Swagger](#api-documentation)   
        - [Working with Storybook](#storybook)   
        - [Working with AWS - Amazon Services](#aws)   
- [Getting Started](#getting_started)   
        - [Installations](/installations.md)   
- [Getting the certificate](/certificate.md)      
- [Authors](#authors)   
- [License](#license)   



## 🧐 About <a name = "about"></a>

This repository is a boilerplate and instructions to how to setup the Final Project

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

12:00 - 13:30 - ...   
13:30 - 14:00 - ...   
14:00 - 14:30 - Lunch   
14:30 - 16:00 - ...   

## 👩‍💼💡👨‍💼 The Customer 

*Add here information about the customer/partner*

##### 💼 Business Glossary

*Add here information about the Business Glossary*
[Business Glossary](/BusinessGlossary.md)

#### 🗄️ Database Model Diagram

*Add here the DB Model Diagram* - Use https://dbdiagram.io/

## 📈 Process 📉📈

### 💻 Working with code

- ALWAYS run code before a PR is made.
- No committing `console.log`
- No committing merge conflicts!
- Work in seperate files! When you make a new feature, the first thing you do is create a new file for that (of course if it makes sense). Especially for components. 

### 👍🏽 Code best practices
Follow these best practices for coding: https://github.com/HackYourFuture-CPH/curriculum/blob/master/review/review-checklist.md

This can be used as a checklist for every PR you make. Go through the list and see if you have used all the best practices

### Working with GIT   
[Working with GIT](/working-with-git.md)   
 
### Working with Heroku and Deployment
[Working with Heroku and Deployment](/deployment.md)

### Working with API Documentation - Swagger

When running the API, you will automatically be running the API Documentation
which is based on Swagger. Just go to
[localhost:3000/api/documentation](http://localhost:3000/api/documentation) to
read the specifications for the API.

You can use your api token to authorize in Swagger and you will be able to
perform test calls against the API directly from Swagger.

If you need to make changes to the specification, this can be done via the
[Swagger.json](/src/server/config/swagger.json) file.


### Working with Storybook 
Tool for developing UI components in isolation 

Check here https://storybook.js.org/

### Working with AWS - Amazon Services
AWS is used for uploading files on a AWS S3 bucket. There is a user on the AWS that has `AmazonS3FullAccess`. There is not a AWS root key, but ONLY a key and a secret key for the AWS user. 

If you need the key and secret to put into the .env file, write to the project manager of the project. 

REMEMBER, this key should be kept super secret!!! NEVER add this to any PR!!

## Getting Started
First clone the repo on your local machine using a terminal or a git client.

#### [Installations](/installations.md)


## Authors

* [**Shanawaz Islam**](https://github.com/h09shais)

### Other contributions

* [**Benjamin Hughes**](https://github.com/benna100)
* [**Zaki Wasik**](https://github.com/zkwsk/)
* [**Filip Malek**](https://github.com/REX500)
* **Daniel Fernandes**


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


