
import { useState } from "react";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo, useLayoutEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from "@material-ui/core/Paper";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import './App.css';
import { IconGlobe, IconBrandInstagram, IconBrandSoundcloud, IconBrandYoutube, IconBrandPatreon, IconMusic } from '@tabler/icons-react';
import { Container, Card } from "@material-ui/core";
import { motion } from 'framer-motion';
const TakeAction = (props) => {
  
  useEffect(() => {
  
  }, []);

  useLayoutEffect(() => {
  

  }, []);

  

  return(
    <Container style={{minHeight:"82vh", textAlign:"center", fontFamily:"Arial"}}>
      <h1 style={{color:"#cec09e", margin: "5% 0", fontSize:'16px'}}>take action</h1>
      <div>
        <p><a href="https://mail.google.com/mail/u/0/#sent/KtbxLwHHnrtBGzwRrCfKdjskNJQtScVffL?projector=1&messagePartId=0.1" target="_blank" style={{textDecoration:"none", color:"white", fontSize:"13px"}}><motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>covid safety 2023</motion.div></a></p>
        <p><a href="https://native-land.ca" target="_blank" style={{textDecoration:"none", color:"white", fontSize:"13px"}}><motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>what stolen land are you on?</motion.div></a></p>
        <p><a href="https://actionnetwork.org/fundraising/mutual-aid-disaster-relief" target="_blank" style={{textDecoration:"none", color:"white", fontSize:"13px"}}><motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>mutual aid disaster relief</motion.div></a></p>
      </div>
   </Container>
    
    );
        
};

export default TakeAction;
