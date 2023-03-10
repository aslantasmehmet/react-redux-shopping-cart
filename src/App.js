
import './App.css';
import Home from './components/Home'
import Cart from './components/Cart'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        </Routes>
    </div>
  );
}

export default App;
