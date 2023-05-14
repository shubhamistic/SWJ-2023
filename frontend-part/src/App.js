import './App.css';
import NavigationBar from './components/NavigationBar'
import About from './pages/About'
import Home from './pages/Home'
import Sponsors from './pages/Sponsors'
import Teams from './pages/Teams'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/sponsors' element={<Sponsors />}></Route>
        <Route exact path='/teams' element={<Teams />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
