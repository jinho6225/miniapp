import React from 'react';
import Header from './Header';
import Board from './Board';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <Board />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
}

export default App;
