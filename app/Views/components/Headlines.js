var React 		= require('react');
var Headlines = require('./Headlines');


// This creates a React Component for us.
// It takes in a few properties that we can pass in...
// One of which is render. Render specifies what the UI looks like for this component
var Main = React.createClass({
    render: function(){

        // Return and parenthesis needs to be on same line.
        /*this.props.children will get replaced by the active component which will be our home component*/
        /*This is because the "home.js" file is inside of the main component*/

        return (

            <div className="main-container">

                <div className="content">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Headlines</h3>
                        </div>
                        <div className="panel-body">
                            <div className="list-group">
                                <div className="list-group-item">test</div>
                                <div className="list-group-item">test</div>
                                <div className="list-group-item">test</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
});

// Tell it which component to render and where we will render it to.
// Then we run webpack -w
// We dont want Main being the central render
// Whenever we require Main we'll get this component
module.exports = Headlines;