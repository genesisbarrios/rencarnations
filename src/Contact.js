import { useState } from "react";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo, useLayoutEffect } from 'react';
import './App.css';
import { Container } from "react-bootstrap";
import { motion } from 'framer-motion';
const Contact = (props) => {

    useEffect(() => {
     
    }, []);


    return (
        <Container style={{minHeight:"65vh", textAlign:"center"}}>
        <h1 style={{margin: "40% 0", fontFamily:"Arial", fontSize:"18px", fontWeight:"bold"}}><a href="mailto:mgmt@rencarnations.com" style={{color:"white", textDecoration:"none"}}> contact: mgmt@rencarnations.com</a></h1>
        
     </Container>
    );
          
};

export default Contact;
