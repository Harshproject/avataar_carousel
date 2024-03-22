import './styles/nav.scss';
import "./styles/home.scss"
import "./styles/carousel.scss"
import Navbar from './components/Navbar.js';
import Home from "./components/Home.js"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
