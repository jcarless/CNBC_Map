// Include the React library.
var React = require('react');

// This will draw from each of the components
var Main = require('../components/Main');
var Headlines = require('../components/Headlines');
/*Note how we include the Profile component as a route. 
 We don't need to include the sub components like Repos or User Profile
 These are already included inside of the Profile function.
 */
var Article = require('../components/Articles');

// We will then pull the router 
var Router = require('react-router');
var Route = Router.Route;

//  IndexRoute is a special React route that acts as the "catch-all"
var IndexRoute	= Router.IndexRoute;

module.exports = (
    // When a user goes to root they will be served the Main component
    // The instructions will then go to our app.js
    // If no other route matches... Then run the IndexRoute.

    // When we go to the main path it will put in the menu

    /*  It will then also drop in either Profile or Home depending on the route.
     Notice how we are passing in "component" as an argument.
     This allows us to point the router to a component.
     */

    <Main>
        <Headlines></Headlines>
        <Article></Article>
    </Main>



//     <Route path="/" component={Main} >
//
//     {/* If user selects the profile path... we get the Profile component*/}
// /*
//     <Route path='/:id' component={Article} />
// */
//
//     {/*If user selects any other path... we get the Home Route*/}
//     <IndexRoute component={Headlines} />
//     </Route>

);


