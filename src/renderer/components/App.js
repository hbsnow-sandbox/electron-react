import React, { Component } from 'react';
import { fetch } from 'cheerio-httpcli';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch(this.refs.pathInput.value, (err, $, res, body) => {
      this.props.setField($('title').text());
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="url" ref="pathInput" required />
          <button type="submit">Submit</button>
        </form>

        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default App;