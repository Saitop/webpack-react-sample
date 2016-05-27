const React = require('react');
require("../styles/bear.css");
const img = require("../assets/bearpoo.png");

const BabyBear = React.createClass({
  render () {
    return(
      <div>
        <p>
          pooping bear doesn't care
        </p>
        <img src={`../${img}`}/>
      </div>
    )
  }
});

module.exports = BabyBear;
