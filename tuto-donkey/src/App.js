import React, { Component } from 'react'
import './App.css';
import Vegeta from './Error_Boundaries/components/Vegeta';
import Goku from './Error_Boundaries/components/Goku';
import Frieza from './Error_Boundaries/components/Frieza';
import ErrorBoundary from './Error_Boundaries/components/ErrorBoundary'
// import GokuVsVegeta from './GokuVsVegeta/GokuVsVegeta';
{/* <GokuVsVegeta /> */ }

class App extends Component {

  render() {
    return (
      <div className="container text-center">
        <h1>Cliquez sur les gentils</h1>

        <div className="row">
          <ErrorBoundary />
          <Vegeta />
          <Goku />
          <Frieza />

        </div>
      </div>
    );
  }
}

export default App;
