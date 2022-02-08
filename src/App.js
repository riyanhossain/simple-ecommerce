
import './App.css';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import { createContext, useState } from 'react';
export const cartContex = createContext();
function App() {
  const [cart, setCart] = useState([])
  return (

    <cartContex.Provider value={[cart, setCart]}>
      <BrowserRouter>
        <Header />

        <Routes>

          <Route path="/" element={<Home />} />
          
            <Route path="/shop" element={<Shop />} />


          <Route path="/order" element={<Order />} />
          <Route path="/inventory" element={<Inventory />} />

        </Routes>



        {/* <Routes>
            <Route path="/*" element={<Error/>}/>
          </Routes> */}
          
      </BrowserRouter>

    </cartContex.Provider>




  );
}

export default App;
