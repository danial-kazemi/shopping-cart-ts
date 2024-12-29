import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap"; 
import { CartProvider } from "./context/CardContext"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";

function App() {
  return (
    <CartProvider>
    <Navbar />
      <Container>
        <Routes>      
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </Container>
    </CartProvider>
  
  )
}
export default App;