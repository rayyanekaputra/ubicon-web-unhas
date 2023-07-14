import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/index";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* https://reactrouter.com/en/main/components/routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
