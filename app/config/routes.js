const React = require('react');
const Main = require('../components/Main');
const Home = require('../components/Home');
const Router = require('react-router');
const Route = require('react-router').Route;
const IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path="/" component={Main} >
    <IndexRoute component={Home} />
  </Route>
);
