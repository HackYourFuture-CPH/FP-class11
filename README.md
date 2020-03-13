
<p align="center">
  <a href="" rel="noopener">
 <img width=150px height=150px src="https://www.hackyourfuture.dk/static/logo-dark.svg" alt="Project logo"></a>
</p>

<h3 align="center">Hack Your Future Class 11 Final Project</h3>



---

## 📝 Table of Contents

- [About](#about)   
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

This repository is for the Final Project of Class11. A collaboration between HYF and Seasony.

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

- 08/03 - Week01 Sunday’s Class  
- 15/03 - Week02 Sunday’s Class  
- 22/03 - Week03 Sunday’s Class  
- 29/03 - Week04 Sunday’s Class 
- 05/04 - Week05 Sunday’s Class
- 12/04 - Easter Holidays - NO CLASSES
- 19/04 - Week06 Sunday’s Class 
- 26/04 - Week07 Sunday’s Class 

- 29/04 - Graduation


## 👩🏻‍💼💡👨🏽‍💼 The Customer 

Seasony is a startup specializing in vertical farming with robotics. We dream about contributing to more local and healthier food production. We do this by combining vertical farming and hydroponics with high-tech and robotics. This automation of vertical farming enables us to support a scalable and sustainable development of healthy food production.

For more information about Seasony, please visit https://www.seasony.dk/

#### 💼 Business Glossary

*Add here information about the Business Glossary*
[Business Glossary](/BusinessGlossary.md)


#### :art: Design
UI Design can be found [HERE](https://www.figma.com/file/BGeghDJzrIq4rq8QsbGa5p/Seasony-final-flow?node-id=0%3A1)


#### 🗄️ Database Model Diagram

*Check the DB Model Diagram* - Use https://dbdiagram.io/d/5e58dfd24495b02c3b878ba4


 <img width="40%" height="40%" src="/seasony_data_model.png" alt="DB Diagram"></a> 

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

##### Recommended plugins

This repository comes with some recommended plugins. Currently Eslint, Prettier and a spellchecking plugin. You will be prompted to install these plugins when you first open VSCode. Please accept installing these plugins as they are there to make it more convenient for you to work with the codebase. If you close the notification by mistake you can go to the extensions sidebar and search for `@recommended` to view the workspace recommendations.

##### Code linting and formatting

To ensure we all code the same way, we are using linting and automatic code formatting in this project.

For linting we use Eslint, which will check your code for "common bad coding practices" that may introduce bugs that are hard to debug. Eslint will run as an extension inside VSCode that will give you small hints when you performing poor coding practices.

For code formatting we use Prettier. The purpose of code formatting is to ensure that everyone formats their code in the same way so we don't get commits where one person is changing all quotes from single to double quotes and then the next commit another person is doing the reverse. This would fill the PRs with a lot of noise and make it hard to focus on essential changes. Prettier works by running an extension in VSCode that will format your code on every save. If you're surprised that your code is changing when you save, don't worry. This is Prettier doing it's job. You may disagree on some of the formatting rules, but Prettier works according to the rules we have specified for the project, so don't try to counteract it.

Besides extensions for Prettier and Eslint in VSCode, we run a small script that will check that Prettier and ESlint has done their job right before you commit. If you get an error when committing you may need to lint and format your code. If it is not done automatically in VSCode, you can run `npm run code:clean` to do it on the command line instead.

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


