const React = require('react');
const Main = require('../components/Main');
const Home = require('../components/Home');
const Router = require('react-router');
const Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path='/' component={Main} >
    <IndexRoute component={Home} />
  </Route>
)
