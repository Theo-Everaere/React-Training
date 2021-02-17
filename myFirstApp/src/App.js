import React from 'react';
import './App.css';
import OnChangeText from './Components/OnChangeText';
// import Client from './Client'
import Checkbox from './Components/Checkbox';
import Loader from './Components/Loader';


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
