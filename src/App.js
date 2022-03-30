import React, { useState } from "react";
import logo from './img/logo.png';
import bar from './img/bar.png';
import { HashLink as Link } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

import Home from './Components/Home';
import Header from './Components/header';
import Portfolio from './Components/portfolio';
import Casino from './Components/casino';
import Fooddrink from './Components/fooddrink';
import Contact from './Components/Contact';
import Team from './Components/team';
import Footer from './Components/footer';
import Api from './Components/api';
function App() {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);  };
  return (
<>
    <div className="header_container" id='header_container'>
    <div className="main_header">
                <div className="logo">
                    
                    <a href="#home"><img alt="resort_spa" src={logo} className="img-fluid"/></a>
                </div>
                <div className="bar">
                    <img alt="resort_spa" src={bar} onClick={handleToggle}/>
                </div>
                <nav className={ isActive ? 'hide-box' : 'show-box' }>
                    <div className="close_icn " onClick={handleToggle}>X</div>
                    
    <Router >

        <ul>
          <li>
            <Link className='hlink' to="/header#home">Home</Link>
          </li>
          <li>
            <Link className='hlink' to="/home#facilities">Facilities </Link>
          </li>
          <li>
            <Link className='hlink' to="/portfolio#portfolio">Portfolio </Link>
          </li>
          <li>
            <Link className='hlink' to="/casino#casino">Casino </Link>
          </li>
          <li>
            <Link className='hlink' to="/fooddrink#fooddrink">Fooddrink </Link>
          </li>
          <li>
            <Link className='hlink' to="/contact#contact">Contact </Link>
          </li>
          <li>
            <Link className='hlink' to="/api#api">API </Link>
          </li>
        </ul>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        {/* <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch> */}

    </Router>
    </nav>
            </div>
        </div>

   
        <Header/>
        <Home/>
        <Portfolio/>
        <Casino/>
        <Fooddrink/>
        <Contact/>
        <Team/>
        <Footer/>
        <Api/>

        </>
  );

}

export default App