import React, { Component } from "react";

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Toto",
      step: 1,
    };
    console.log("Je suis dans le constructor() ENFANT");
  }

  componentDidMount(){
    console.log("Je suis dans le componentDidMout() ENFANT");

  }
  render() {
    console.log("Je suis dans le render() ENFANT");
    return <div>{console.log("Mise à jour DOM dans le composant ENFANT")}</div>;
  }
}

export default ChildComponent;
