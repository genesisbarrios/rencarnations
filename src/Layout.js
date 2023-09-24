
import React from "react";
import "./App.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ReactComponent as Logo } from "./logo.svg";
import Header from './Header';


const Layout = (props) => {
    
    return(
      <div>
          <Header />
            { props.children }
      </div>
    );
  }

export default Layout;


