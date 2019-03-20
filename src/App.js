import React, { Component } from 'react';
import { injectIntl, defineMessages } from "react-intl";

import logo from './logo.svg';
import './App.css';

const messages = defineMessages({
  title: {
    id: 'app.title',
    defaultMessage: 'Welcome to React'
  },
  content1: {
    id: 'app.content1',
    defaultMessage: 'To get started, edit'
  },
  content2: {
    id: 'app.content2',
    defaultMessage: 'and save to reload.'
  }
})

class App extends Component {
  render() {
    const { intl: { formatMessage } } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <div className="languages">
            <a href="/?locale=ar">العربية</a>
            <br />
            <a href="/?locale=en">English</a>
            <br />
            <a href="/?locale=es">Español</a>
            <br />
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{formatMessage(messages.title)}</h1>
          <p>
            {formatMessage(messages.content1)} <code>src/App.js</code> {formatMessage(messages.content2)}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default injectIntl(App);
