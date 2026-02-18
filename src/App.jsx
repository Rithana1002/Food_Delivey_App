import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Foods from "./Route_library/Foods";
import Drinks from "./Route_library/Drinks";
import Desserts from "./Route_library/Desserts";
import "./App.css";

function App() {
  return (
    <Router>
      <header>🍔 Food Delivery</header>

      <nav>
        <NavLink to="foods/">Foods</NavLink>
        <NavLink to="/drinks">Drinks</NavLink>
        <NavLink to="/desserts">Desserts</NavLink>
      </nav>

      <Routes>
        <Route path="/foods" element={<Foods />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/desserts" element={<Desserts />} />
      </Routes>
    </Router>
  );
}

export default App;
