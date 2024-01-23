
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
import { IconBrandSpotify, IconBrandSoundcloud, IconBrandYoutube, IconBrandApple, IconBrandAmazon } from '@tabler/icons-react';
import { Container, Card, Button } from "@material-ui/core";
import { motion } from 'framer-motion';
const ThankYou = (props) => {
  
  useEffect(() => {
  
  }, []);

  useLayoutEffect(() => {
  

  }, []);

  

  return(
    <Grid container style={{minHeight:"87vh", marginTop:"5%", width:"100%"}}>
      <Grid item sm={12} md={6} style={{textAlign:"center"}}>
      <a href="https://www.patreon.com/rencarnations" target="_blank" style={{textDecoration:"none", color:"#cec09e"}}><img src="tipjar.jpg" style={{width:"65%"}}></img></a>
      </Grid>
      <Grid item md={6} sm={12} style={{marginTop:"12%", textAlign:"center"}}>
        <div>
          <h1 style={{color:"#f5b3d1", margin: "5% 0", fontSize:'16px'}}>thank you</h1>   
          <p style={{color:"#b39f84", fontSize:'13px'}}>through every phase, thank you for your continued support.</p>
        
            <Button style={{border:"1px solid #b39f84", color:"#b39f84", marginTop:'20px'}}><a href="https://ko-fi.com/rencarnations" target="_blank" style={{textDecoration:"none", color:"#b39f84", fontFamily:"Arial", fontSize:"13px"}}>Tip Jar</a></Button>
  
        </div>
      </Grid>
    </Grid>
    
    );
        
};

export default ThankYou;
