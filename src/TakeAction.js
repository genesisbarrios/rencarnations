
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

const TakeAction = (props) => {
  
  useEffect(() => {
  
  }, []);

  useLayoutEffect(() => {
  

  }, []);

  

  return(
    <Container style={{minHeight:"82vh", textAlign:"center"}}>
      <h1 style={{color:"#cec09e", margin: "5% 0", fontSize:'1.5em'}}>Take Action</h1>
      <div>
        <p><a href="https://mail.google.com/mail/u/0/#sent/KtbxLwHHnrtBGzwRrCfKdjskNJQtScVffL?projector=1&messagePartId=0.1" target="_blank" style={{textDecoration:"none", color:"white"}}>Covid Safety 2023</a></p>
        <p><a href="https://native-land.ca" target="_blank" style={{textDecoration:"none", color:"white"}}>What stolen land are you on?</a></p>
        <p><a href="https://actionnetwork.org/fundraising/mutual-aid-disaster-relief" target="_blank" style={{textDecoration:"none", color:"white"}}>Mutual Aid Disaster Relief</a></p>
      </div>
   </Container>
    
    );
        
};

export default TakeAction;
