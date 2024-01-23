
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
    <Container style={{minHeight:"82vh", textAlign:"center", fontFamily:"Arial"}}>
      <h1 style={{color:"#f5b3d1", margin: "5% 0", fontSize:'16px'}}>mutual aid resources</h1>
      <div>
        
        <p><a href="https://native-land.ca" target="_blank" style={{textDecoration:"none", color:"white", fontSize:"13px"}}>what stolen land are you on?</a></p>
        <p><a href="https://actionnetwork.org/fundraising/mutual-aid-disaster-relief" target="_blank" style={{textDecoration:"none", color:"white", fontSize:"13px"}}>mutual aid disaster relief</a></p>
        <p style={{color:"#b39f84", margin: "3% 0", fontSize:'16px'}}>4 palestine</p>
        <p><a href="https://tr.ee/MkrMAfCfoM" target="_blank" style={{textDecoration:"none", color:"white", fontSize:"13px"}}>bds movement</a></p>
        <p><a href="https://sewaxlydz.notion.site/sewaxlydz/One-Hour-Of-ACTION-69a6f695e0ab480db97cafcd6138d20b" target="_blank" style={{textDecoration:"none", color:"white", fontSize:"13px"}}>one of hour of action</a></p>
        <p style={{color:"#b39f84", margin: "3% 0", fontSize:'16px'}}>4 covid</p> 
        <p><a href="https://special.usps.com/testkits " target="_blank" style={{textDecoration:"none", color:"white", fontSize:"13px"}}>order covid home tests</a></p>
      </div>
   </Container>
    
    );
        
};

export default TakeAction;
