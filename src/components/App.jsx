import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="#">RAB</a>
            </div>
          </div>
        </header>

        <Switch>
          <Route path="/" component={Home} />
        </Switch>

        <footer>

        </footer>
      </div>
    )
  }
}