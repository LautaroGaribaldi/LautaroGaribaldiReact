import logo from './logo.svg';
import './App.css';
import Title from "./Components/Title"
import { NavBar } from './Components/NavBar/NavBar';
import ItemListConteiner from './Components/ItemListConteiner/ItemListConteiner';

function App() {
  const lists = ["Zelda","Final Fantasy","Persona 5"]
  return (
    <div className='App'>
    <Title />
    <NavBar />
    <ItemListConteiner name="Andres"/>
    </div>
  );
}

export default App;
