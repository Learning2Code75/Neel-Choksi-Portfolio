import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Samples from "./pages/Samples";
function App() {
  const [isAuth, setIsAuth] = useState(false);

  // const signUserOut = () => {
  //   signOut(auth).then(() => {
  //     localStorage.clear();
  //     setIsAuth(false);
  //     window.location.pathname = "/login";
  //   });
  // };

  const [active, setActive] = useState(1);
  const [toggle, setToggle] = useState(false);

  return (
    <Router>
      <header className="header">
        <a href="#home" className="logo">
          Neel Choksi.
        </a>
        <div
          onClick={() => setToggle(!toggle)}
          style={{
            cursor: "pointer",
          }}
        >
          {toggle ? <IoClose id="menu-icon" /> : <HiMenu id="menu-icon" />}
        </div>
        <nav className={`navbar ${toggle ? "active" : ""}`}>
          <a
            href="#home"
            className={active === 1 ? "active" : ""}
            onClick={() => {
              setActive(1);
              setToggle(false);
            }}
          >
            Home
          </a>
          <a
            href="#about"
            className={active === 2 ? "active" : ""}
            onClick={() => {
              setActive(2);
              setToggle(false);
            }}
          >
            About
          </a>

          <a
            href="#certification"
            className={active === 4 ? "active" : ""}
            onClick={() => {
              setActive(4);
              setToggle(false);
            }}
          >
            Certifications
          </a>
          <a
            href="#languages"
            className={active === 5 ? "active" : ""}
            onClick={() => {
              setActive(5);
              setToggle(false);
            }}
          >
            Languages
          </a>
          <a
            href="#interests"
            className={active === 6 ? "active" : ""}
            onClick={() => {
              setActive(6);
              setToggle(false);
            }}
          >
            Interests
          </a>
          <a
            href="#education"
            className={active === 7 ? "active" : ""}
            onClick={() => {
              setActive(7);
              setToggle(false);
            }}
          >
            Education
          </a>
          <a
            href="#workexp"
            className={active === 8 ? "active" : ""}
            onClick={() => {
              setActive(8);
              setToggle(false);
            }}
          >
            Work Experience
          </a>
          <a
            href="#projects"
            className={active === 9 ? "active" : ""}
            onClick={() => {
              setActive(9);
              setToggle(false);
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={active === 3 ? "active" : ""}
            onClick={() => {
              setActive(3);
              setToggle(false);
            }}
          >
            Contact
          </a>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<CreatePost setActive={setActive} />} />
      </Routes>
    </Router>
  );
}

export default App;
