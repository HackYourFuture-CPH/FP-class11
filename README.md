<p align="center">
  <a href="" rel="noopener">
 <img width=150px height=150px src="https://www.hackyourfuture.dk/static/logo-dark.svg" alt="Project logo"></a>
</p>

<h3 align="center">Hack Your Future Class 11 Final Project</h3>

---

## 📝 Table of Contents

- [About](#about-)
- [Project's Calendar](#-projects-calendar)
- [The Customer](#-the-customer)
  - [Business Glossary](/BusinessGlossary.md)
  - [Database Model Diagram](#️-database-model-diagram)
- [Process](#-process-)
  - [Working with code](#-working-with-code)
  - [Code best practices](#-code-best-practices)
  - [Working with GIT](/working-with-git.md)
  - [Working with Heroku and Deployment](/deployment.md)
  - [Working Knex and migrations](/knex-and-migrations.md)
  - [Working with API Documentation - Swagger](#-working-with-api-documentation---swagger)
  - [Working with Storybook](#-working-with-storybook)
  - [Working with AWS - Amazon Services](#-working-with-aws---amazon-services) - [Testing](#testing)
- [Getting Started](#getting-started)
  - [Installations](/installations.md) - [Code linting](#code-linting-and-formatting)
- [Getting the certificate](/certificate.md)
- [Authors](#-authors)
- [License](#-license)

## 🧐 About <a name = "about"></a>

This repository is for the Final Project of Class11. A collaboration between HYF and Seasony.

## ⛏️ Built Using <a name = "built_using"></a>

- [React](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [MySQL](https://www.mysql.com/) - Database
- [Express](https://expressjs.com/) - Server Framework - Server and Client side structure
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

_Add here information about the Business Glossary_
[Business Glossary](/BusinessGlossary.md)

#### :art: Design

UI Design can be found [HERE](https://www.figma.com/file/BGeghDJzrIq4rq8QsbGa5p/Seasony-final-flow?node-id=0%3A1)

#### 🗄️ Database Model Diagram

_Check the DB Model Diagram_ - Use https://dbdiagram.io/d/5e79e58e4495b02c3b88b043

<img width="40%" height="40%" src="/seasony_data_model.png" alt="DB Diagram"></a>

- [How to make changes on the diagram](/diagram.md)

## 📈 Process 📉📈

### 💻 Working with code

- ALWAYS run code before a PR is made.
- No committing `console.log`
- No committing merge conflicts!
- Work in separate files! When you make a new feature, the first thing you do is create a new file for that (of course if it makes sense). Especially for components.

### 🧱 Guidelines for building components

Generally there are 2 types of components: _presentational_ and _container_ components. Please review the differences below:

|                       | Presentational components                           | Container components                                                                                                                                                      |
| --------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Also known as         | "dumb" components, functional stateless components  | "smart" components, stateful components                                                                                                                                   |
| Lives in this folder  | `/components`                                       | `/containers`                                                                                                                                                             |
| Purpose               | Determines what a component looks like              | Determines how the applications works                                                                                                                                     |
| Communication         | Can only communicate by receiving and passing props | Can communicate via props, can call APIs, can manipulate the DOM with REFs, etc.                                                                                          |
| Markup                | Contains most of the markup for the application     | Should generally have as little markup as possible. A container `<div>` or an `<ul>` tag is ok, but if you need more, consider making a separate presentational component |
| Storybook             | Can easily be mocked in Storybook                   | Cannot easily be mocked in Storybook, would require mocking API calls, etc.                                                                                               |
| Can have side effects | No                                                  | Yes                                                                                                                                                                       |  |

#### A note about React Hooks

These are general distinctions. In the past you could only make container components as class components as functions could not have state, but with React Hooks functional components can now have state. And with the addition of Context API components can easily communicate with their siblings and jump multiple steps in the hierarchy outside of how props are used to communicate between components. This is very powerful and can be convenient, but can easily make the application overly complex, so the advice is to stick to the separation between Presentational and Container components as closely as possible and only apply for example Context API where there is a justified need.

#### Proptypes

It is highly recommended, but not a requirement, to add proptypes to your components. Proptypes does two things:

- Give you an understandable error in the browser console when you try to use a component with wrong props specified.
- Provide a way for others to quickly reason about how to use your component when they read your code.

To add proptypes, simply import the proptypes package and specify exactly what data you expect your props to contain on the propTypes property of your component:

    ...

    import PropTypes from 'prop-types;

    ...
    [your component code]
    ....

    YourComponent.propTypes = {
      firstProp: PropTypes.string.isRequired,
      secondProp: PropTypes.number.isRequired
    }

Note the capitalization in the example above. It's easy to get wrong. Refer to the [proptypes npm package for further documentation](https://www.npmjs.com/package/prop-types).

#### Using Storybook

Storybook provides a _sandbox environment_ where it is easy to mock components in a visual way. When you create a _presentational component_ you should always add a story so it shows up in storybook. Benefits of using Storybook is:

- Clear overview of which components are implemented and which are not.
- Ability to experiment with applying different props to components to learn whether a given component could be used in another use-case.
- Makes it easier to perform a visual review of components (does it look like the original design?), as the reviewee would not have to put the application in a certain state to view the component (might otherwise involve performing SQL queries to populate the database and cleanup would also be required after).

Storybook runs as a separate web application parallel to the main application. Run storybook with the following command

    npm run storybook

The storybook application will become available on [http://localhost:3007](http://localhost:3007). From here you can browse and review the available components.

Some components may have "knobs" which are UI controls that allows you to interactively play with the props of a given component. It is up to the author of the component to set up knobs.

#### How to create a new story

The most basic way to create a story for your component is to put this code in your the stories file for your component (my-component.stories.js):

    import React from 'react';
    import MyComponent from './my-component.component';

    export default { title: 'Some title' };

    export const basicStory = () => <MyComponent firstProp={1} secondProp={2} />;

If you open Storybook, you should see your component under the headline "Some title".

You can have multiple Stories (i.e. multiple mutations of the same component) in your stories file. Just add another export. The story will take its name from the exported variable name:

    ...

    export const basicStory = () => <MyComponent firstProp={1} secondProp={2} />;
    export const advancedStory = () => <MyComponent firstProp={() => callMagicFunction()} secondProp={{ ...mysteriousObject }} />;

This will result in two stories under the headline "Some title".

You can also add folders to add hierarchical organization to your stories:

    ...

    export default { title: 'Secret Folder/Some title' };

    ...

##### Adding knobs (optional)

You can add "knobs", i.e. form elements that will allow you to interact with your component by manipulating props in real time, by importing `withKnobs` from the `@storybook/addon-knobs` package and using it as a decorator.

    import React from 'react';
    import MyComponent from './my-component.component';
    import { withKnobs, boolean, number } from "@storybook/addon-knobs";

    export default { title: 'CardLayouts/Status Card', decorators: [withKnobs] };

    export const WithKnobs = () => <MyComponent isTrue={boolean('Toggle is true', true)} theNumber={number('Change the number', 42)} />;

Boolean and number which are also imported are widgets to manipulate the props. Boolean will provide a simple true/false checkbox and number will provide a number input. But you can add [many different knobs](https://www.npmjs.com/package/@storybook/addon-knobs), including dropdown selects and color pickers.

#### Breaking down components

Always think about how you can break your UI into meaningful reuseable components. On one hand you want to be able to re-use your code as much as possible and on the other you want to avoid premature abstraction into components, meaning that you don't want to create a lot of components that are never actually re-used.

Please refer to [this article](https://reactjs.org/docs/thinking-in-react.html) for the basics about breaking UI elements into components.

#### Coding guidelines for components

1. When relevant pre-fix your component with the domain it is addressing. For example if it is a list showing motorcycles, call it `MotorcycleList`, not `ListMotorcycle`. This way components will be grouped by domain when sorted alphabetically in a folder. If it is a generic list component that can contain many things, omit the domain and call it `List`.
2. Put Presentational components in a folder inside `/components` and postfix their name with `.component`.
3. Put container components in a folder inside `/containers` and postfix their name with `.container`.
4. All assets (styles, test, stories) associated with a component lives in the component folder.
5. Postfix filenames with type of the file to make it easier to search for a given file in VSCode. Examples:
   - `/motorcycle-list/motorcycle-list.container.js`
   - `/motorcycle-card/motorcycle-card.component.js`
   - `/motorcycle-card/motorcycle-card.styles.css`
   - `/motorcycle-card/motorcycle-card.stories.js`
   - `/motorcycle-card/motorcycle-card.test.js`
6. File names should be lowercase and composite words `kebab-case` to avoid problems across filesystems.
7. Component names (i.e. the name of the function in JS) should be `PascalCased` by general React conventions. Don't include `.component` or `.container` in the JS name.

#### Using Recharts charting library

Recharts documentation: http://recharts.org/en-US
Git repository: https://github.com/recharts/recharts (you can look for help in the issues tab)
How to work with the package: https://www.youtube.com/watch?v=KF1XM5CvB3U

### 🎨 Theming and global styling

For global styles (i.e. styles that shall affect all components) use `src/client/index.css`. Global styles should be very rare and should typically be reserved for things like CSS resets, importing fonts and utilities.

For theming, use the file `src/client/theme.css`. Theming covers everything related to the visual presentation of the site that needs to be re-used often. That means colors, borders, paddings, shadows, etc.

### 🧱 Component styling

Components should always have a unique CSS class to make it easy to apply styles and styles. For example the "label" component should have a class "label". To easily concatenate different classes or apply classes conditionally, use the `classnames` npm package. Example of a label component that has a class "label" and will receive additional classes as props:

    ...
    import classNames from 'classnames';

    export default function Label({ title, className }) {
      return <span className={classNames('label', className)}>{title}</span>;
    }
    ...

Only put styling that is relevant to the individual component in the component CSS file. If it covers multiple components, put it in `theme.css` or `index.css`.

### 📤 📥 Inline CSS vs Stylesheets

Generally components should be styled using a dedicated stylesheet per component (see naming conventions in the section above). Exceptions can be made for values that are dynamically updated - i.e. a width that can any arbitrary value. If you need to change between two colors, apply css classes to the element in question style those classes and use react to switch out the css classes. For example:

    .label-primary {
      background-color: var(--primary-color);
      color: var(--white);
    }

### 👍🏽 Code best practices

Follow these best practices for coding: [HERE](https://github.com/HackYourFuture-CPH/curriculum/blob/master/review/review-checklist.md)

This can be used as a checklist for every PR you make. Go through the list and see if you have used all the best practices

### <img width=20px height=20px src="/git-logo.png" alt="GitHub logo"></a> Working with GIT

[Working with GIT](/working-with-git.md)

### <img width=15px height=30px src="/heroku-logo.svg" alt="Heroku logo"></a> Working with Heroku and Deployment

[Working with Heroku and Deployment](/deployment.md)

### <img width=59x height=20px src="/knex-logo.png"  alt="Knex logo"></a> Working with Knex and Migrations

[Working Knex and migrations](/knex-and-migrations.md)

### <img width=25px height=25x src="/swagger-logo.png"  alt="Swagger logo"></a> Working with API Documentation - Swagger

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

- [**Shanawaz Islam**](https://github.com/h09shais)

### Other contributions

- [**Benjamin Hughes**](https://github.com/benna100)
- [**Zaki Wasik**](https://github.com/zkwsk/)
- [**Filip Malek**](https://github.com/REX500)
- [**Daniel Fernandes**](https://github.com/dpfernandes)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
