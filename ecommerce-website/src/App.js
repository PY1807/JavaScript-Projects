import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div >
     <Navbar className="App" />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
     </Routes>
    </div>
  );
}

export default App;
