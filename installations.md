
## Prerequisites

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


#### Mysql workbench

Install it from here:

Windows: https://dev.mysql.com/downloads/windows/installer/

Mac: https://dev.mysql.com/doc/refman/5.7/en/osx-installation-pkg.html

#### Setting up on Windows

Only thing Windows users have to do is run the following command anywhere in
their terminal (not necessarily the project folder):
`npm install -g win-node-env`

Refer to
[this](https://stackoverflow.com/questions/11928013/node-env-is-not-recognized-as-an-internal-or-external-command-operable-comman)
post on stackoverflow for more info.

#### Install Node

Refer to this points on how to install on your OS:

- [Linux](https://nodejs.org/en/download/package-manager/)
- [Windows](https://nodejs.org/en/download/)
- [Mac](https://nodejs.org/en/download/)

#### Installing

Run `npm install` to install all required dependencies.

### Prettier
Install Prettier - Code formatter
Enable format on save: https://github.com/prettier/prettier-vscode#format-on-save



#### Coding styles

Follow these best practices for coding:
https://github.com/HackYourFuture-CPH/curriculum/blob/master/review/review-checklist.md

This can be used as a checklist for every PR you make. Go through the list and
see if you have used all the best practices

##### Prettier

The Project comes pre setup with [Prettier](https://prettier.io/), which is a
tool that will automatically format your code. Prettier is currently set up to
format your code right before committing to git, so there should be no risk of
someone committing something that does not live up to our coding style.

You may, however, optionally install the Prettier VS Code extension to format
your code on every single save. This has the benefit that you will always be
looking at code in the right format and you will know exactly what gets
committed at any time.

In VS Code you can press CTRL+P (CMD+P on Mac) and type
`ext install esbenp.prettier-vscode` to install the extension directly or you
can browser and find it in the Marketplace.

Remember to enable "format on save" in VS Code settings. You can also enable
formatting on pasting or while editing, depending on your taste.

#### Environment variables

Environment variables are used for working with sensitive data like passwords
and usernames.

Fx connecting to a database, we dont want to commit the code that shows our
password. Therefore we use environment variables instead. The `.env` **SHOULD
NEVER** be commited!!!! Therefore it is in the `.gitignore` file (ignored by
git).

Here is how to get started with the `.env` file

- Copy and rename the `.env.example` file to `.env`:

```
cp .env.example .env
```

- Open the `.env` file and update any parameters according to the environment
  you are running.

#### Database setup

Working with sql we use a tool called knex which helps with writing queries and
with changing the database structure. Check these out:
https://www.quora.com/What-is-Knex-js
https://knexjs.org/#Builder-identifier-syntax

- Install knex cli globally with: `npm i -g knex`
- Update the connection details to the database in the `.env` file
- after the server runs and you see a `connection to <db_name> db successful!`
  message you are ready to migrate tables
- To make a new migration make sure you terminal is where the `knexfile.js` is.
  Otherwise `cd` into that folder! run `knex migrate:make MIGRATION_NAME`. Fx if
  i want to make a new users table i would run `knex migrate:make users`. This
  would set up the migration file (under the `migrations` folder) for me to
  write the users table.
- To make a new seed i would run `knex seed:make 01_SEED_NAME`. Fx
  `knex seed:make 01_USERS`. This would create a new seed file in the folder
  `seeds`.
- To then actually apply the migrations and the seeds, run `npm run db:setup`
- If it was successful you should now have the tables and seeds in the database
  🎉

## 🎈 Usage <a name="usage"></a>

### 📦 NPM scripts and commands

| Command             | Note                                                                                                                                                |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run build`     | Build the project in production mode.                                                                                                               |
| `npm start`         | Runs `build` and starts the project (to be used on production servers).                                                                             |
| `npm run client`    | Runs the client application and serves it with webpack development server.                                                                          |
| `npm run server`    | Runs the server and serves it via Nodemon, meaning that the server will automatically be restarted when you make code changes.                      |
| `npm run dev`       | Runs `client` and `server` concurrently. _This is generally the command you run for development_.                                                   |
| `npm run db:setup`  | Runs `knex migrate:latest` and `knex seed:run`. Quick setup to get a fresh database ready for work.                                                 |
| `npm run do`        | Utility that allows you to easily run cli commands on npm packages installed in your `node_modules` folder without having to install them globally. |
| `npm run storybook` | Run the Storybook user interface.                                                                                                                   |
