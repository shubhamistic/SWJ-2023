import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <NavBar/>
      <Container>
        <Outlet/>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
