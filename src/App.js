import logo from './logo.svg';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';
import About from './pages/about';

function App() {
  return (
    <Router>
   

      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element={<About/>} />
      </Routes>

    </Router>

    
  );
}

export default App;
