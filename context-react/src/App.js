import './index.css';
// import BookList from './Methode1/components/BookList';
// import NavBar from './Methode1/components/NavBar';
import ThemeContextProvider from './context/ThemeContext';
import NavBar2 from './Methode2/components/NavBar2';
import BookList2 from './Methode2/components/BookList2';
import ThemeToggle from './ThemeToggle/ThemeToggle';
import AuthContextProvider from "./context/AuthContext"
import BookContextProvider from './context/BookContext';

function App() {
  return (
    <div className="App">
      {/* <ThemeContextProvider>
        <NavBar />
        <BookList />
      </ThemeContextProvider> */}
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar2 />
          <BookContextProvider>
            <BookList2 />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
