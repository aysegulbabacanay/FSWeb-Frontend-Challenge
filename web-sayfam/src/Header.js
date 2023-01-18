import React from "react";
import './App.css';
import logom from "./logom.png";
import Form from "./Form";
import { Route, Link, Switch } from 'react-router-dom';

  
  
function Header(props) {
  const {reference,clickskills,clickproject}=props;

  

  return (
    <div ref ={reference}className="App-header">
      <section className="App-logo">
        <img src={logom} />
      </section>
      <nav className="nav-menu">
        <a onClick ={clickskills} >Skills </a>

        <a onClick ={clickproject} >Projects </a>
        <button  >Hire me </button>

       
      </nav>

    </div>
  );
}

export default Header;
