# E-commerce Back End Starter Code
---
## Technologies Used
![GitHub top language](https://img.shields.io/github/languages/top/eSTee3/E-Commerce-Back-End?color=green&logo=github&logoColor=green)
![GitHub language count](https://img.shields.io/github/languages/count/eSTee3/E-Commerce-Back-End?color=green&logo=github&logoColor=green)

## Coding Badges
![alt text](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![alt text](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![alt text](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![alt text](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

![alt text](https://img.shields.io/badge/Inquirer-package-red)
![alt text](https://img.shields.io/badge/console.table-package-red)

---

### Table of Contents
- [Technologies Used](#technologies-used)
- [Coding Badges](#coding-badges)
- [Description](#description)
- [Installation](#installation)
- [Demo Video](#application-demo-video)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [License](#license)
- [How to Contribute](#how-to-contribute)

---
# Description
I present you with a backend solution to an eCommerce front end.  It utilizes MySQL and sequelize to produce easy-to access api's for all CRUD requirements as they relate to eCommerce.

[Back to Top](#table-of-contents)

---
# Installation
1. Download or clone this repo to your local machine
2. Create a `.env` file in the root of the directory (within your IDE of choice)
 - Copy/paste the following code into the .env file you created, changing the password to be your MySQL root password:
 ```
  DB_NAME = 'ecommerce_db'
  DB_USER = 'root'
  DB_PW = 'password'
 ```
3. Update the `'rootPassword'` within that file, to be your MySQL root password
4. Launch a terminal from the root of the same folder
5. Log into MySQL by entering `mysql -u root -p`, followed by entering your password
6. Enter `source db/schema.sql` to source the Database to your MySQL instance
7. Enter `use ecommerce_db`to change the in-use Database to "ecommerce_db"
8. Enter `exit` to go back to the standard terminal prompt
9. Enter `npm install` to install all required packages and wait for them to complete
10. Enter `npm run seed` to seed the newly created ecommerce_db Database
11. Enter `npm start` to initialize and launch the api server and complete this process
    - Steps 5 through 11:

        <img src="./resources/Source Seed and Start the DB.gif" width="50%" height="50%"/>

[Back to Top](#table-of-contents)

## Application Demo Video
[![Demonstration Video](https://img.youtube.com/vi/CRUn9n0FdZI/0.jpg)](https://www.youtube.com/watch?v=CRUn9n0FdZI)

## User Story
**AS A** manager at an internet retail company...  **I WANT** a back end for my e-commerce website that uses the latest technologies...  **SO THAT** my company can compete with other e-commerce companies

[Back to Top](#table-of-contents)
## Acceptance Criteria
- **GIVEN a functional Express.js API**
```
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
┗►THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands
┗►THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application
┗►THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia Core for categories, products, or tags
┗►THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
┗►THEN I am able to successfully create, update, and delete data in my database
```
[Back to Top](#table-of-contents)

---

# License

MIT License

Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back to Top](#table-of-contents)

---

## How to Contribute

[Contributor Covenant](https://www.contributor-covenant.org/)

[Back to Top](#table-of-contents)
