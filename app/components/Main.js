const React = require('react');
const ReactDom = require('react-dom');

const Main = React.createClass({
  render () {
    return(
      <div>
        Hello world!
      </div>
    )
  }
});

ReactDom.render(<Main />, document.getElementById('app'));
