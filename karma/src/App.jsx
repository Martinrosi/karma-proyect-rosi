import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import ItemDetailContainer from './Pages1/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Pages1/ItemListContainer/ItemListContainer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/Productos/:categoryId' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
