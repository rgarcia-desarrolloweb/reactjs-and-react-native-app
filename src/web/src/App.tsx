import React from 'react';
import logo from './logo.svg';
import './App.css';

import IoC from './ioc'
import { TYPES, User, UserLoggedUseCase } from '@my-account/core'

class App extends React.Component {
  state = { user: User }

  async componentWillMount() {
    let useCase: UserLoggedUseCase = IoC.container.get(TYPES.UserLoggedUseCase);
    let user = await useCase.execute();

    this.setState({ user });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.user != null ? this.state.user.name : "No User Logged"}
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

export default App;
