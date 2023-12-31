import React from 'react';
import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo__container">
        <img className="logo" src={logo}></img>
        <h2 className="logo__header">Meme Generator App</h2>
      </div>
      
      <a href="https://scrimba.com/learn/learnreact" target="_blank"><h3>React Course - Project 3</h3></a>
    </header>
  )
}

export default Header