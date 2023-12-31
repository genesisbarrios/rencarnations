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
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
 
useEffect(() => {

}, []);

  
return (

   <>
   {[false].map((expand) => (
     <Navbar key={expand} expand={expand} bg="#050505" variant="dark" className="mb-3">
       <Container fluid>
       <NavbarBrand className='m-auto'>
            <a href="/" style={{textDecoration:"none"}}> 
                <Nav className="headings"  style={{marginLeft:"10%", fontSize:"28px"}} >
                    rencarnations    
                </Nav>
            </a>  
        </NavbarBrand>
         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
         <Navbar.Offcanvas
           id={`offcanvasNavbar-expand-${expand}`}
           aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
           placement="end"
         >
           <Offcanvas.Header closeButton  style={{backgroundColor:"#050505"}} closeVariant="white">
           </Offcanvas.Header>
           <Offcanvas.Body style={{backgroundColor:"#050505", fontFamily:"Arial", fontSize:"16px"}}>
             <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/Listen"  style={{color:"#cec09e"}}>listen</Nav.Link>
                        
                <Nav.Link href="https://www.youtube.com/@rencarnations" target="_blank"  style={{color:"#cec09e"}}>watch</Nav.Link>
                {/* <Nav.Link href="/">Shop</Nav.Link> */}
                <Nav.Link href="/TakeAction"  style={{color:"#cec09e"}}>take action</Nav.Link>
                <Nav.Link href="/ThankYou"  style={{color:"#cec09e", marginBottom:"10%"}}>thank you</Nav.Link>
               
             </Nav>
             <Form className="d-flex">
               <Form.Control
                 type="search"
                 placeholder="search"
                 className="me-2"
                 aria-label="search"
               />
               <Button style={{border:"1px solid #cec09e", color:"#cec09e", backgroundColor:"#050505"}}>search</Button>
             </Form>
           </Offcanvas.Body>
         </Navbar.Offcanvas>
       </Container>
     </Navbar>
   ))}
 </>
  );
}


export default Header;


