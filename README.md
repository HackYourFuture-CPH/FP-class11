# Boilerplate for Final projects

## This boilerplate is for Final Projects use and it includes:

Knex - http://knexjs.org/
Swagger - https://swagger.io/
Storybook - https://storybook.js.org/
Prettier - https://prettier.io/
Server and Client side structure

## Class Daily Agenda

12:00 - 13:30 - ...
13:30 - 14:00 - ...
14:00 - 14:30 - Lunch
14:30 - 16:00 - ...


## Process


## Working with GIT, Heroku and handing in iterations
Working with git is a HUGE part of the final project. This is how you should be working with git in the final project:

This repo has two branches:
- `master` - Used for deployment. This branch should be as clean as is possible. NEVER directly commit to this branch!
- `develop` - A branch where we do all development. That means that all feature branches should be merged into this branch. Very important! 

Lets get started with our first feature. Lets say we should build a cookies popup:
1. Fork this repo. You now have a version of this repo on your profile.
2. BEFORE WE WRITE ONE SINGLE LINE OF CODE, create the feature branch where we will do all our cookies popup development. `git checkout -b cookies-popup`
3. Now we write all our code in the `cookies-popup` branch, we make good commits that are not too bit, not too small! We push our branch so it is to be found in our forked repo. Cool, so far so good!
4. We now want the `cookies-popup` branch to go into https://github.com/HackYourFuture-CPH/class07-final-project. We do this with a pull request (PR). BUT BEFORE we do that, there are a couple of thing we need to do before:
   1. Lets say it took a week for us to write `cookies-popup` and in that time there were 5 branches merged into the `develop` branch of https://github.com/HackYourFuture-CPH/class07-final-project. Hmm that means that our `develop` branch on https://github.com/YOURUSERNAME/class07-final-project is out of date. So if we just created our PR we our feature might not work (because the codebase was changed). Lets say that in one of the 5 commits someone gave the body a `z-index` of 1. Our popup has no `z-index`, so when the cookies popup should be shown it is not visible. So we need to sync our `develop` branch with class07 `develop` branch. Marta talked about that, but read this aswell: https://help.github.com/en/articles/syncing-a-fork
   2. Okay, so now our  `develop` branch is in sync with class07 `develop`. Perfect! To get those 5 changes lets merge `develop` into `cookies-popup`
   3. **We now run our code** and see that the popup is not shown (see above why). Lets fix it by giving our `cookies-popup` a `z-index` of 2, create a new commit to our branch. 
   4. NEVER commit something that is not running! You will break the build for everyone! so ALWAYS run the code before you create your PR. 
5. Now we can go to https://github.com/HackYourFuture-CPH/class07-final-project and create a PR that merges `cookies-popup` into `develop`. This PR is really nice, check it out: https://github.com/HackYourFuture-CPH/class07-final-project/pull/89
6. Now we have made our PR, great. Someone is going to review this PR and might tell us to change a variable name. Now we simply make the change locally on the `cookies-popup`, make that commit, push it and this commit will automatically show up on the PR.
7. Everything look nice now and someone merges `cookies-popup` into `develop`. Awesome that was our first feature :) This maybe seems like a big hassle, but once you get used to it, it is not so bad!

## Working with code

- ALWAYS run code before a PR is made.
- No committing `console.log`
- No committing merge conflicts!
- Work in seperate files! When you make a new feature, the first thing you do is create a new file for that (of course if it makes sense). Especially for components. 

### Prettier
Install Prettier - Code formatter

Enable format on save: https://github.com/prettier/prettier-vscode#format-on-save

### Code best practices
Follow these best practices for coding: https://github.com/HackYourFuture-CPH/curriculum/blob/master/review/review-checklist.md

This can be used as a checklist for every PR you make. Go through the list and see if you have used all the best practices

# Node template project
Template project to kickstart your Node development process using Express routing framework

## Getting Started
First clone the repo on your local machine using a terminal or a git client.
Run `npm install` to install all required dependencies.
Refer to [Deployment](#Deployment) section on how to deploy and run.

Node will run on any linux based kernel system as well as Microsoft Windows.

Refer to this points on how to install on your OS:
* [Linux](https://nodejs.org/en/download/package-manager/)
* [Windows](https://nodejs.org/en/download/)
* [Mac](https://nodejs.org/en/download/)

### Mysql workbench
Install it from here: 

Windows:
https://dev.mysql.com/downloads/windows/installer/

Mac:
https://dev.mysql.com/doc/refman/5.7/en/osx-installation-pkg.html

### Installing
In order to start the project make sure that you have Node, mysql workbench and npm installed.
Refer to section [Prerequisites](#Prerequisites) on how to install both.

When done run the following commands:
* `npm install`

### Environment variables
Environment variables are used for working with sensitive data like passwords and usernames. 

Fx connecting to a database, we dont want to commit the code that shows our password. Therefore we use environment variables instead. The .env SHOULD NEVER be commited and is in the .gitignore file (ignored by git). 

Here is how to get started:
* Create a new file in source folder and name it .env
* Copy contents from .env.example into newly created file .env
* Change the database part to fit your database user and password

#### Setting up on Windows
Only thing Windows users have to do is run the following command anywhere in their terminal
(not necessarily the project folder):
`npm install -g win-node-env`

Refer to [this](https://stackoverflow.com/questions/11928013/node-env-is-not-recognized-as-an-internal-or-external-command-operable-comman) post on stackoverflow for more info.

## Database setup
Working with sql we use a tool called knex which helps with writing queries and with changing the database structure. Check these out: https://www.quora.com/What-is-Knex-js https://knexjs.org/#Builder-identifier-syntax

* Install knex cli globally with: `npm i -g knex`
* after the server runs and you see a `connection to <db_name> db successful!` message you are ready to migrate tables
* to migrate tables and get the seed data. First change your `pass` and `user` string to your real password and username. That's because the `process.env` is not run on db:setup. Now write `npm run db:setup`. Go to your mysql workbench and see the database called `hack_your_future`, you should be able to see some tables and some data in the tables. 

## `Deployment`

Navigate to project folder in your terminal:
* On Linux or Mac run the following command: `npm run dev`
* On Windows first refer to [Setting up on Windows] section and then run: `npm run dev`

## AWS
AWS is used for uploading the podcast files on a AWS S3 bucket. There is a user on the AWS that has `AmazonS3FullAccess`. There is not a AWS root key, but ONLY a key and a secret key for the AWS user. 

If you need the key and secret to put into the .env file, write to the project manager of the project. 

REMEMBER, this key should be kept super secret!!! NEVER add this to any PR!!

## Authors

* **Shanawaz** - *Initial work* - [REX500](https://github.com/REX500)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration: [nephross](https://github.com/nephross)

## Getting the HackYourFuture certificate
To get the certificate we need to make sure that you know our stack, for us to recommend you to another company. So how do we figure this out? We look through homework and we look through the commits you create in the final project. 

Its important to say that you dont need to be an expert in everything, not at all!! You can be more interested in the frontend or the backend, but we then need to see that interest. 

But if you are missing 4 react homeworks and the one you have committed is super basic. AND we dont see some more advanced react usage, well then it becomes super hard for us to recommend you to a company that does react. Because we simply dont know if you have the skills. 

If we fell there are gaps, we will talk with you as early as possible, so you have time to show your worth!

If it comes so far that we cannot give you a certificate you can either join for the next final project or make a project (or we give you a project) where you show your skills. We truly want to give you the certificate and will help you as much as we can to get you there!

A little more specific here is what we are looking for:
- Semantic html
- Styling
    - Responsiveness
    - Layout
    - If it looks pretty DOES NOT MATTER!
- Javascript
    - Variable naming
    - Function scope
    - ES6
    - `Classes`, `promises`, `map`, `filter` and all that shabang
- Node
    - Express
    - Nice structure
    - Can create an api using the database. CRUD
    - Everything modularized (Split into smaller parts)
- Database
    - Create tables
    - Queries
- React
    - Using the react way of developing, SUPER IMPORTANT! https://reactjs.org/docs/thinking-in-react.html
    - Knows how to use state and prop
    - Well designed components
    - Can use the api created from node




