import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Machining from './components/Machining';
import Fabrication from './components/Fabrication';
import Assembly from './components/Assembly';
import Quality from './components/Quality';
import Careers from './components/Careers';

function App() {
  return (
    // <header className="App-header">
        <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/machining" element={<Machining />} />
            <Route exact path="/fabrication" element={<Fabrication />} />
            <Route exact path="/assembly" element={<Assembly />} />
            <Route exact path="/quality" element={<Quality />} />
            <Route exact path="/careers" element={<Careers />} />
          </Routes>
        </Router>
      {/* </header> */}
    </div>
  );
}

export default App;
