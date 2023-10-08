import { useState } from "react";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo, useLayoutEffect } from 'react';
import './App.css';
import { Container } from "react-bootstrap";

const Contact = (props) => {

    useEffect(() => {
     
    }, []);


    return (
        <Container style={{minHeight:"82vh", textAlign:"center"}}>
        <h1 style={{margin: "25% 0"}}><a href="mailto:mgmt@rencarnations.com" style={{color:"white", textDecoration:"none"}}>contact: mgmt@rencarnations.com</a></h1>
        
     </Container>
    );
          
};

export default Contact;
