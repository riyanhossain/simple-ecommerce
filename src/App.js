
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

function App() {
  return (


    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Home />} />
          <Route path="/order" element={<Order />} />
        </Routes>

        {/* <Routes>
            <Route path="/*" element={<Error/>}/>
          </Routes> */}
      </BrowserRouter>

    </div>




  );
}

export default App;
