import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Printing from './pages/Printing';
import Souvenirs from './pages/Souvenirs';
import Blanks from './pages/Blanks';
import Badges from './pages/Badges';
import logo from './assets/kolibri-logo.png';
import mailIcon from './assets/icons/mail.svg';
import phoneIcon from './assets/icons/phone.svg';
import TopInfoBar from './pages/TopInfoBar';
import ProductPage from './pages/ProductPage';
import './App.css';

function App() {
  return (
    <Router>
      <TopInfoBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/printing" element={<Printing />} />
        <Route path="/souvenirs" element={<Souvenirs />} />
        <Route path="/blanks" element={<Blanks />} />
        <Route path="/badges" element={<Badges />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
