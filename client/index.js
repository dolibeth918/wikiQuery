import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Main extends Component {
  componentWillMount() {
    axios
      .get(
        'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&explaintext&titles=Late_Registration'
      )
      .then(console.log);
  }
  render() {
    return (
      <div id="main">
        <div id="navbar">
          <div>Contact List</div>
        </div>
        <div id="container">{/* your components here */}</div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
