import './App.css'
import Laptop from './components/laptop/Laptop';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import House from './components/house/House';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Car from './components/car/Car';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <NavBar />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route exact path="/laptopPricePredictor" element={<Laptop />} />
          <Route exact path="/housePricePredictor" element={<House />} />
          <Route exact path="/carPricePredictor" element={<Car />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
