const React = require('react');
const BabyBear = require('./babyBear');

const Main = React.createClass({
  render () {
    return(
      <div>
        Hello world !
        <BabyBear/>
      </div>
    )
  }
});

module.exports = Main;
