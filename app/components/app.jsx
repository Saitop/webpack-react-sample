const React = require('react');
const ReactDom = require('react-dom');
const BabyBear = require('./babyBear.jsx');

const App = React.createClass({
  render () {
    return(
      <div>
        <BabyBear />
      </div>
    )
  }
});

ReactDom.render(<App />, document.getElementById('app'));
