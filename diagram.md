# Guideline to change the DB Diagram

### The DB Diagram might change over the duration of the project and it's important that 
you follow some guidelines if you need to change the DB you must change the diagram.

- First make sure you actually need to change the DB. 

- Write a migration using Knex.js that will perform the needed Schema updates. 

- Make sure to test it thoroughly on your own branch.

- Take the file /db/Schema.dbml and copy into the editor on dbdiagram.io. 

- Make changes according to what you changed in your migration.

- Copy paste the updated DBML code from dbdiagram.io and add it back to the /db/Schema.dbml.

- Export the diagram as pdf. Take a screenshot and use it to replace the file /db/Schema.png.

- Make sure to save the diagram on your dbdiagram.io account and use the "Share" button to copy the url and paste it into this readme file in the section above.

- Commit the updated Readme, png file and DBML file.

- Make a pull request with the updated schema files along with your migration.
