# Final Project for "Fundamentals in Javascript" course at Singapore University of Technology and Design

Submitted by : James Ee


# Project Description

This is the end-of-course final project for our learning of javascript at SUTD. Please see [project requirements](images/assessment-plan.pdf).


As this is a pure javascript course, there is a strict restriction on no third party libraries or frameworks like React is allowed. **Only vanilla javascript is allowed for the project**.

Also, UI requirement is minimal as the main focus of the project is on evaluating our understanding of javascript.

# Project Setup

* Installed Tailwind CSS to do the UI styling. To compile the tailwind settings at src/style.css into public/style.css:
```bash
$ npm run build-css
```

* A skeleton html file (public/index.htm) is created in the "public" folder.

* An javascript file (public/index.js) is created. This is the main file where all the javascript functions for the comic reader is written.

# Run the website locally

```bash
$ live-server public/
```
The website is served at http://127.0.0.1:8080

# Deployed the Comic Reader at Github Pages

Upon completion of the project, the website is deployed at Github Pages for demo purpose. 

The url to the website is :

https://jamesee.github.io/js-capstone

# Main features of the website

* On loading the website, it will do an initial api call to https://xkcd.now.sh/?comic=latest to get the information of the latest comic available. 

* User can choose to display between 1, 3, 5 comics per page using the dropdown.

* User can also choose the comic number he wishes to see using the input field and click the "GO" button. User can also decide to randomly fetch comics using the "RANDOM" button.

* As part of the projet requirement, if user chose 3 comics per page with latest comic number (say 2513), the webpage will display comic numbers [ 2512, 2513, 1]. If user chose 5 comics per page with the latest comic number 2513, the webpage will then display comic numbers [ 2511, 2512, 2513, 1, 2].

* Although this not a project requirement, the website also can handle cases when user chose to display 3 comics per page with comic number = 1, the webpage will display comic numbers [2513, 1, 2]. 

* The Prev and Next button is self-explanatory.

* Display of "Loading ..." to improve user interface experience.

All the above features were implemented using <u>**state management with functional programming in vanilla javascript**</u>. 

<br><br>
References: <br>

1. [Dead Simple State Management in Vanilla Javascript](https://dev.to/vijaypushkin/dead-simple-state-management-in-vanilla-javascript-24p0)

2. [Serializing form data with the vanilla JS FormData() object](https://gomakethings.com/serializing-form-data-with-the-vanilla-js-formdata-object/)

3. [Remove All Child Nodes](https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/)