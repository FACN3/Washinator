import { Switch, BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import Home from './Home';
import Statistics from './Statistics';
import NavBar from './NavBar';
import './styles/reset';
import './styles/style';
import './styles/images';

const Container = styled.div``;

// our App

const App = () => (
  <BrowserRouter>
    <Container>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/statistics" component={Statistics} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
