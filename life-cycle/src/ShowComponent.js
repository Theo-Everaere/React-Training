
import React, { Component } from 'react'
import LifeCycle from './LifeCycle'

class ShowComponent extends Component {
  state = {
    display: true
  }

  effacerOuAfficher = () => {
    this.setState({display: !this.state.display})
  }

  render() {

    const showComponent = this.state.display ? (<LifeCycle name="Toto2" />) : (<div></div>);
    
    return (
      <div className="App">
        {showComponent}

        <button onClick={this.effacerOuAfficher}>Cliquez ici</button>

      </div>
    );
  }
}

export default ShowComponent;

