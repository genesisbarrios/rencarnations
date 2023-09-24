import { useState } from "react";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo, useLayoutEffect } from 'react';
import './App.css';
import { Container } from "react-bootstrap";

const Contact = (props) => {

    useEffect(() => {
     
    }, []);


    return (
        <Container style={{minHeight:"82vh", textAlign:"center"}}>
        <h1 style={{margin: "25% 0"}}><a href="mailto:rencarnations@gmail.com" style={{color:"#cec09e", textDecoration:"none"}}>Contact: rencarnations@gmail.com</a></h1>
        
     </Container>
    );
          
};

export default Contact;
