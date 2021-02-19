import './App.css';
import ChildOne from './components/ChildOne'
import ChildrenTwo from './components/ChildTwo'

function App() {

  const handleClick = () => {
    alert('Je sais !')

  }
  const handleClick2 = () => {
    alert('Je ne sais pas.')
  }
  const handleClick3 = () => {
    alert('Non.')
  }

  return (
    <div className="App">

      <ChildOne data={
        {
          titre: "Titre Dynamique",
          btn: (handleClick),
          contenu: "Plus d'infos ici"
        }
      }
      />

      <ChildOne data={
        {
          titre: "Titre Dynamique",
          btn: (handleClick2),
          contenu: "Moins d'infos ici"
        }
      }
      />

      <ChildrenTwo data={
        {
          titre: "Titre Non Dynamique",
          btn: (handleClick3),
          contenu: "Peut-etre des infos ici ?"
        }
      }
      />



    </div>
  );
}

export default App;
