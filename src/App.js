import React from 'react';
import './App.css';
import Navbar from './Navbar.js'

function App() {
  return (

      <React.Fragment>
        <h1 classname='title'>Thank God 4 Raw & Vegan Treats</h1>
        <nav classname='nav-bar'>
          <ul nav-bar-item></ul>
          <ul nav-bar-item></ul>
          <ul nav-bar-item></ul>
          <ul nav-bar-item></ul>
        </nav>
        <img classname='home-img'/>
        <p classname='contact'>Contact Me</p>
        <p classname='phone'></p>
        <p classname='email'></p>
        <img classname='instagram'/>
        <img classname='facebook'/>
        <p>We Accept:</p>
        <img classname='cashapp'/>
        <img classname='venmo'/>

        <div classname='review-container'>
          <ul reivew-item></ul>
          <ul reivew-item></ul>
          <ul reivew-item></ul>
        </div>

      </React.Fragment>
  );
}

export default App;
