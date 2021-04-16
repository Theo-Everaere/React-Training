import './App.css';
import Accueil from './Components/Accueil';
import Contact from './Components/Contact';
import Projet from './Components/Projet';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/Projet" exact component={Projet} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="" exact component={() => <div>Erreur 404</div>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
