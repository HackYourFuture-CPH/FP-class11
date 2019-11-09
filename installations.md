
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

## ✈️ Working with migrations

Migrations are there to help manage your database when you are working in a
team. The goal of a migration is to take your database from one place (state) to
another. So it is bit like travelling. Traveling in time even?

We are trying to solve two main things with migrations:

- The pain of keeping the local database in your development environment up to
  date.
- The challenge of making schema changes to a database with real production data
  in a predictable manner.

Since are typically managed by writing ad hoc SQL to create the database, create
new tables, change tables and change the data inside the database, migrations
makes all of these tasks repeatable and predictable by basically adding all of
these changes to git. Essentially the solution is to never manipulate the
database schema directly with ad hoc queries, but always to out those queries in
a script that is stored in git. Furthermore, since git allows you to "travel in
time" by checking out past commits, changing branches, etc. we need a way for
the database to keep up.

### Up 🛫 and down 🛬 migrations

We do so by having two types of migrations. There are up migrations (🛫) that
describes how to travel somewhere and there are down migrations (🛬) that
describe how to get back home again. The down migrations are key, since these
are what allows you to take your database back to an old state whenever you are
checking out an old commit or a branch from before a certain up migration was
applied. A down migration must always be the exact opposite of an up migration.
A couple of examples in pseudo code (not real code! refer to the Knex section to
learn to write real migrations):

Creating tables:

```
up migration:
  create table products
    add columns
      "name", string
      "price", decimal

down migration:
  drop table products
```

Renaming columns

```
up migration:
  select table products
    rename column
      "name" > "product name"


down migration:
  select table products
    rename column
      "product name" > "name"
```

In some cases you might have real data in your database that you need to
transform in some way. Again you must be careful to write a down migration to
revert those changes:

```
up migration:
  select table products
    select "name" from products
      replace string "foo" to "bar"


down migration:
  select table products
    select "name" from products
      replace string "bar" to "foo"
```

### Working with Knex.js

Now we have an idea what migrations are it is time to introduce
[Knex.js](http://knexjs.org/). We use Knex.js to facilitate migrations, but it
does a few other things for us:

- Manage database connection
- Manage migrations and seed files
- Expose a CLI api to help scaffold migration files and run migration commands
- Provide an api to build SQL queries

### 🔌 Database connection

Knex.js helps us connect to the database quickly. Take a look at the
[Knexfile](/src/server/knexfile.js).

The file contains some database credentials (which are referenced from
environment variables for security reasons) and some configuration including
setting a path to the seeds directory. This file is really all you need to start
connecting to your database when using Knex.

### ✈️ Migration files in Knex.js

So we learned a bit about migrations, but how do you use Knex to make them?

Knex works by scanning the `/migrations` folder and looking for migrations _that
have not yet been applied to the database_. How does it keep track of this?
Easy. It has it's own table in the database `knex_migrations` where migrations
are added once they have been run.

### 🌱 Seed files in Knex.js

In addition to migrations which are generally concerned with updating the
structure or the "schema" of your database, Knex.js provides something called
"seeds". As the name suggest seeds are scripts that "plant" some data that can
later grow to something bigger. Often when you are building an application you
need to have some initial data in your application to test that everything
works. That might be the initial user that is able to then create more users,
organizations and so on, or it could be thousands of lines of data to load up
the application with realistic content for testing purposes.

### ⌨️ Knex CLI

Make sure to always refer to
[the official Knex documentation for latest updates](http://knexjs.org/).

The project comes with the knex npm package pre-installed, but to use the api
smoothly it is recommended to install knex globally with:

```
npm install -g knex
```

(you might have to prefix the command with sudo if you get a write access error)

Note: When running knex commands you must always do so from the `/src/server/`
directory since knex will look for your knexfile in the directory you are
currently in.

Here is a list of some important Knex commands to know:

| Command                            | Note                                                                                          |
| ---------------------------------- | --------------------------------------------------------------------------------------------- |
| `knex migrate:latest`              | Run "latest" migrations (i.e. migrations that have not previously been run on your database). |
| `knex migrate:rollback`            | "Roll back" the latest migration.                                                             |
| `knex migrate:make migration_name` | Create a new migration file in the `/migrations` folder.                                      |
| `knex seed:run`                    | Run the seed files from the seeds folder.                                                     |

In addition to the commands above, we have a npm script called
`npm run db:setup` which is shorthand for running `knex migrate:latest` followed
by `knex seed:run`.

### Building queries in Knex.js

Knex provides a query builder interface. What it basically allows you to do is
to use an api to generate SQL similar to this:

```
const users = await knex
  .from("users")
  .select("*")
  .where({
    email: "hello@test.com
  });
```

Which will essentially generate the following SQL:

```
select * from `users` where `email` = 'hello@test.com'
```

In some cases using an API like that might be easier than writing raw SQL, as
there is less risk of making mistakes when trying to put together dynamic SQL
queries, concatenating strings and values from different sources. But on the
other hand, it also requires learning a new API which may add additional
overhead. We cannot provide the API documentation here, but you can find all the
instructions you need at [http://knexjs.org/](http://knexjs.org/). Furthermore
this [Cheat sheet](https://devhints.io/knex) might be helpful.

Using query builders like Knex, or even Object-Relation Mappers (ORMs), is
subject to much debate among developers. Some believe it is worth it learning to
use an API to interact with the database, others believe it is more value to
become good at using SQL, rather than abstracting it away. Using Knex' query
builder functionalities are _not mandatory_ for this project, but we find that
the API is simple enough that it might be helpful. _Using migrations, however,
is a mandatory part of this project_.

If you do not wish to use the knex query builder api, you can always use the
command `knex.raw()` to execute "raw" SQL statements against your database while
still leveraging Knex to connect to the database:

```
knex.raw('select * from `users` where `email` = "hello@test.com"');
```
