# Welcome to Resumate!

## [For Installation Instructions, click here!](#installation)

## About the project

Recently, the Canadian government has announced a new plan to welcome over 500,000 immigrants each year by 2025. We see a demand for Resumate since it can help fight some of the many challenges that new immigrants face when settling in a new country. Resumate can provide help with resume editing, as well as suggest courses and education to increase their skills and experience level. Through this, Resumate can improve a new immigrant’s chance of securing a job.

## Inspiration
When we worked with international students during our time at the UBC career center, we noticed that many international students and immigrants faced challenges in finding employment in Canada due to their lack of knowledge about the Canadian job market and poor resume writing skills. 
We also know that the quality and content of one’s resume is one of the most important factors when it comes to securing a job. In addition, the federal government is planning on bringing in 500,000 immigrants to Canada each year by 2025.
Therefore, we took inspiration from this potential issue to create an app to help international students and immigrants secure a job in Canada by suggesting improvements to their current resume and ways to upgrade their skills.

## What it does
A user can input their resume, and get back a rewritten resume as well as tips on how to better improve their resume
Based on the user’s resume and a job description for a job they’re interested in, they can get a list of courses they can take to improve their skills and make them better suited  for the job.

## How we built it
Front end was built using React, HTML, CSS, and JavaScript, and Axios was used to handle data between our front end and back end, which was created using Python and Flask. Our back end then makes requests to the OpenAI API.

## Challenges we ran into
POSTing to our back end from our front end and reading the data correctly
Deploying both our front-end and back-end servers due to time constraints and account issues
Translating our app menus and instructions
Generating correct  and usable responses from the OpenAI API

## Accomplishments that we're proud of
Our app is usable in multiple languages
Creating both a front end and a back end



## What we learned
Learning more about React
How to create a back end using Flask
Gaining more experience with HTTP requests and API calls

## What's next for Resumate
Implementation of a Community page where new immigrants can network and connect with other new immigrants
Directory of helpful resources for new immigrants
Implementation of responsive design that supports all media size
A mobile app version 


What languages, frameworks, platforms, cloud services, databases, APIs, or other technologies did you use?
Front end:
React, HTML, CSS, Axios, JavaScript
Back end:
Python, Flask
OpenAI API


## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
