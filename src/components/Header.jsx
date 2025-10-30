import React, { Component } from 'react';
import "./Nav.css"
import Link from '../assets/Link.png';
import Nav from './Nav';
import './Header.css'

const Header = ({title}) => {
    return ( 

     <>
     <img src={Link}/>
     <Nav title="about me" />
     <Nav title="Contact me" />
     <Nav title="Reach out" />
     </>


     );
}
  
export default Header ;