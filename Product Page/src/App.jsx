import './App.css';
import { Route, Routes, Link } from 'react-router-dom'; //Necessary router components
import Home from "./components/Home";
import Products from "./components/Products";
import CarDetails from "./components/CarDetails";
import BottomNav from './components/BottomNav';


function App() {
  return (
    <div>
      <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/car-details" element={<CarDetails />} />
            </Routes>
      </main>
      <BottomNav />
    </div>
         
        );     
      }
    
  

export default App;