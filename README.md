# clowning-around-entertainment-job-board

## Description:

"Introducing our revolutionary job board exclusively tailored for the vibrant circus and entertainment industry!

With our platform your business can easily find top talent for their unique roles, while job seekers can discover exciting opportunities within this dynamic field.

Say goodbye to generic job listings, and hello to a specialised platform connecting professionals with their dream jobs - after all, you don’t want just anyone sticking their head in your lion's mouth!"

The application is for businesses to be able to quickly create, and amend and upload their job adverts to attract the best talent in the market as a “catch all” location for finding high-quality entertainment professionals.

Our product treats recruiters as members. Once they login, they are able to post their available roles to the site.

Job seekers are able to visit the site and see all the available roles without having to register or login
Job seekers can then click the apply button which will send them directly to their preferred email provider and from there they are able to message the company with their application.

## Table of Contents:
* [License](#license)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation Process](#installation-process)
* [Sources](#sources)
* [Repository and Images](#repository)

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## User Story
```md
AS a recruitment company of circus & entertainment staff:
I WANT current job vacancies to be posted and save new adverts for specialist performers,
SO THAT employers can easily find new entertainment talent.
I WANT to attract companies who are looking for talent, 
SO THAT they are the ones supporting the site through a tailored membership.
I WANT job seekers to be able to view the roles immediately when they open the site and be able to apply for them easily,
SO THAT it makes it as simple as possible for the individuals looking for new roles.
```

## Acceptance Criteria
```md
GIVEN an employer wants to hire for his team...
WHEN I first visit the website 
THEN I want to see a list of adverts currently advertised.
WHEN I first visit the website
THEN I want to see a clearly defined log-in button to use to log-in.
WHEN I am logging in
THEN I want to be able to see my password as I type it.
WHEN I am logged in 
THEN I want to see new buttons appear that allow me to post a new advert.
WHEN I am editing an advert
THEN I want to be able to the options to save the advert as a unique template OR delete the advert.
WHEN I have posted my advert
THEN I want to see the advert appear in the list of adverts on the homepage.
WHEN I view the list of adverts
THEN I want to be able to order them by LOCATION, JOB TYPE and JOB TITLE.


```
## Installation Process

As this repo is deployed to Heroku, you will not need to run it locally as all database provisioning and setup is handled there.

However, if you did wish to use the frontend locally, the following steps can be followed to setup to recreate a development enviroment with database functionality:

  Follow the following steps to properly install this application:

  * Clone the code from the repository by copying either its HTTPS, SSH key or GitHub CLI and pasting the URL into your terminal at the location where you want said cloned direction as per the following example:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

  * Open the cloned repository in any source code editor.

  * Node.js must be installed. You can download the installer directly from the [Nodejs website](https://nodejs.org). Alternatively, if you have Homebrew installed as the de facto package manager for macOS, you can simply type:

```bash
brew install node
```

MySQL must be downloaded and installed also.
You can download the installer directly from the [MySQL website](https://dev.mysql.com/downloads/installer). Alternatively, if you have Homebrew installed as the de facto package manager for macOS, you can simply type:

```bash
brew install mysql
```
Proficiency with the MySQL command line prompt is encouraged, but GUI's such as MySQL Workbench can also be used to provide access to the database (I personally used TablePlus during the creation of my application). 

This command line application makes use of several dependencies:

  * To install these packages, run the following commands from within the CLI at the root of the application:

```bash
npm i
```

We will then connect our Node.js servers to our MySQL databases to perform queries based on client requests and return responses accordingly.

You will need to create a `.env` file in your root directory. This will store your configuration details for accessing MySQL such as database name and login information. Example as follows:

```
DB_NAME='YOUR DATABASE NAME'
DB_USER='YOUR USERNAME'
DB_PASSWORD='YOUR PASSWORD'
```

Prior to starting the server, we need to create our database and its seeded data with the following commands:

Run `mysql -u root -p` from the command line and enter your MySQL password when prompted if you have one to access MySQL. 
Create the E-Commerce database with command `source db/schema.sql`. 
You can log out ofthe MySQL shell with `\q`.
Seed database with `npm run seed` as notated in the "scripts" section of the `package.json` file.


  * And finally: 

  Please type the following command within the terminal to invoke the application:

```bash
npm start
```

## Sources & Contributions
Graham McCullough [Github](https://github.com/Grahamy27)
Simon Moore [Github](https://github.com/simonmoore23)
Lewis Reynolds [Github](https://github.com/Lllewisreynolds)
Tomasz Pawlikowski [Github](https://github.com/TP4458)
Mag Millen-Dutka [Github](https://github.com/MagMillen-Dutka)

## Links:

Github: https://github.com/simonmoore23/clowning-around-entertainment-job-board

Heroku: https://still-depths-15165-644cc0ba8436.herokuapp.com/

## Walkthrough Video:
[Click Here to Watch](https://drive.google.com/file/d/17RxVKLGV_1ITtaFn33Lt0CYdQW5Q5h2p/view)


## Screenshots:
### Figure 1. 
![Wire Frame](/assets/Wireframe.png)
### Figure 2. 
![Home Page](/assets/Home%20Page.png)
### Figure 3. 
![Adding Job Listing](/assets/Add%20Job%20Listing.png)
### Figure 4. 
![Updated Profile Page](/assets/Profile%20Page.png)
