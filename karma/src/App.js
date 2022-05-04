import './App.css';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer />  */}
      <ItemDetailContainer />
      
    </div>
  );
}

export default App;
