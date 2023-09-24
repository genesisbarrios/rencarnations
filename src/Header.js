import "./App.css";
import { useEffect, useMemo } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Listen from "./Listen";
import Contact from './Contact';
import Diary from './Diary';
import StayInTouch from './StayInTouch'
import TakeAction from './TakeAction'
import ThankYou from './ThankYou'
import Home from './Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState } from "react";
import React from "react";
import "./App.css";
import { Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
import { ReactComponent as Logo } from "./logo.svg";
import {Grid} from "@material-ui/core"
import "bootstrap/dist/css/bootstrap.min.css";


const Header = () => {
 
useEffect(() => {

}, []);

  
return (
    <Grid>
       
        <Navbar collapseOnSelect expand={false} bg="#050505" variant="dark" style={{marginTop:"0", paddingTop:'0'}}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{marginLeft:"10px"}}/>
            <Grid item sm={3}>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Listen">Listen</Nav.Link>
                        <Nav.Link href="/https://www.youtube.com/@rencarnations" target="_blank">Watch</Nav.Link>
                        {/* <Nav.Link href="/">Shop</Nav.Link> */}
                        <Nav.Link href="/Links">Links</Nav.Link>
                        <Nav.Link href="/TakeAction">Take Action</Nav.Link>
                        <Nav.Link href="/ThankYou">Thank You</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Grid>
            <Grid item sm={3}>
                    <NavbarBrand>
                        <a href="/" style={{textDecoration:"none"}}> 
                            <Nav className="headings"  style={{marginLeft:"10%"}} >
                                rencarnations    
                            </Nav>
                        </a>  
                    </NavbarBrand>
            </Grid>
            <Grid item sm={3}></Grid>
        </Navbar>
       
       
  </Grid>
  );
}


export default Header;


