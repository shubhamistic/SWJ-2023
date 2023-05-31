import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Teams from "./pages/Teams";
import Sponsors from "./pages/Sponsors";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <NavBar/>
      <Container>
        <Outlet/>
      </Container>
    </>
  );
}

export default App;
