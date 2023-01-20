import React from "react";
import './App.css';
import logom from "./logom.png";
import Form from "./Form";
import { useState } from "react";
// import {Route,Link,Switch} from "react-router-dom";


function Header(props) {
  const { reference, clickskills, clickproject, clickfooter } = props;

  //  const[formac,setFormac]=useState(false);


  return (
    <div ref={reference} className="App-header">
      <section className="App-logo">
        <img src={logom} />
      </section>
      <nav className="nav-menu">
        <a onClick={clickskills} >Skills </a>

        <a onClick={clickproject}  >Projects </a>


        {/* {formac ? <div><Form/></div> :"" } */}
        {/* <button onClick={()=>setFormac(!formac)}>Hire me </button>  */}
        <button onClick={clickfooter}>Hire me </button>

      </nav>

    </div>
  );
}

export default Header;
