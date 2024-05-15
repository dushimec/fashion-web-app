import React from "react";
import './App.css'
import {Link} from 'react-router-dom'
import logo from './img/KFM.png'
import account from './img/account.png'
import cart from './img/cart.png'
import menu from './img/menu.png'
import women from './img/women.png'


function Home() {
    return (
        <section>
         <div className="Home-page">
         <div className="navbar">
          <div className="log">
            <img src={logo} className="logo" />
          <div className="nav">
            <a href="">Home</a> 
            <a href="">Shop</a>
            <a href="">Blog</a>
            <a href="">About Us</a>
            <a href="">Contuct Us</a>
         <div className="sidebar">
          <Link> Home </Link>
          <Link> Shop </Link>
          <Link> Blog </Link>
          <Link> About Us </Link>
         </div>
         
          </div>
          </div>
          <div className="icon">
         <img  src={account} className="account" />
         <img src={cart} width="" />
         
         <img src={menu} className="menu" />
         </div>
         </div>
         <div className="content-image">
          <div className="content-note">
            <h5>The new summer <br/>
  collections</h5>
          <div className="btn"> 
            <button>explore now</button></div>
          </div>
          <div className="image">
              <img src={women} className="women" />
              <div className="circle">
            </div>
            </div>
         
         </div>
         </div>
        
   
        </section>
        
    )
}
export default Home;