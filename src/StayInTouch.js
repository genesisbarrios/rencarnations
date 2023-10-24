
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

const StayInTouch = (props) => {
  
  useEffect(() => {
  
  }, []);

  useLayoutEffect(() => {
  

  }, []);

  

  return(
    <Container style={{minHeight:"82vh", textAlign:"center"}}>
      <h1 style={{color:"#cec09e", margin: "5% 0", fontSize:"1.5em"}}>Connect</h1>
      <div>
        <p><a href="https://www.youtube.com/@rencarnations" target="_blank" style={{textDecoration:"none", color:"white"}}><IconBrandYoutube></IconBrandYoutube> YouTube</a></p>
        <p><a href="https://www.instagram.com/oiranimes.s/" target="_blank" style={{textDecoration:"none", color:"white"}}><IconBrandInstagram></IconBrandInstagram> Instagram</a></p>
      </div>
   </Container>
    
    );
        
};

export default StayInTouch;
