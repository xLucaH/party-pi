import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import GoalsAndPlans from './pages/GoalsAndPlans';
import Home from './pages/Home';
import BusinessCanvas from './pages/BusinessCanvas';
import './index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path='/businessCanvas' element={<BusinessCanvas />} />
          <Route exact path='/moscowMethod' element={<GoalsAndPlans />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
