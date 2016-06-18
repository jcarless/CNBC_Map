// app.js plays the central role of handling rouing and is the "starting point" in our code.

// Grab the dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// This will draw from each of the components
var Main = require('./Views/components/Main');
var Headlines = require('./Views/components/Headlines');
/*Note how we include the Profile component as a route.
 We don't need to include the sub components like Repos or User Profile
 These are already included inside of the Profile function.
 */
var Article = require('./Views/components/Articles');


// Grab the property associated with the Router
var Router = require('react-router').Router;

// Grabs the "routes"
var routes = require('./Views/config/routes');

// Render the ccontents according to the routes page.
ReactDOM.render(
// routes will tell us which route to go to depending on which route we are looking at
// We will drop the content into the 'app' 
    <Main></Main>,
    document.getElementById('app')
);