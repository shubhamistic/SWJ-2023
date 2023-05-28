import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Teams from "./pages/Teams";
import Sponsors from "./pages/Sponsors";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/sponsors" element={<Sponsors />} />
          <Route exact path="/teams" element={<Teams />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
