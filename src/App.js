import { Fragment } from 'react';
import '../src/Assets/App.css';
import NavBar from './Components/Navbar/NavBar';
import ItemlistContainer from './Components/ItemlistContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './Components/ItemDetailContainer';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemlistContainer/>} />
      <Route path="/category/:category" element={<ItemlistContainer/>} />
      <Route path="/:category/:productoID" element={<ItemDetailContainer/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
