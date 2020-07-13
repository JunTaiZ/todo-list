import React from 'react';
import logo from './logo.svg';
import './App.scss';
import AppsIcon from '@material-ui/icons/Apps';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <AppsIcon />
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
      </Container>
    </div>
  );
}

export default App;
