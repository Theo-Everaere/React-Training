import React from 'react';
import './App.css';
import OnChangeText from './OnChangeText';
// import Client from './Client'
import Checkbox from './Checkbox';
import Loader from './Loader';


class App extends React.Component {

  render() {

    return (

      <div className="App">
        <h1>Class OnChangeText</h1>
      <OnChangeText />
        <h1>Checkbox</h1>
      <Checkbox />
        <h1>Loader</h1>
      <Loader />


      </div>
    )
  }
}
export default App;
