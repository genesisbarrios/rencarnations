
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

const ThankYou = (props) => {
  
  useEffect(() => {
  
  }, []);

  useLayoutEffect(() => {
  

  }, []);

  

  return(
    <Container style={{minHeight:"82vh", textAlign:"center"}}>
      <Grid container style={{marginTop:"25%"}}>
            <Grid item sm={6}>
            
            </Grid>
            <Grid item sm={6}>
            <h1 style={{color:"#cec09e", margin: "5% 0"}}>thank you</h1>   
            <p style={{color:"#cec09e"}}>through every phase, thank you for your continued support.</p>
            <Button style={{border:"1px solid #cec09e", color:"#cec09e"}}><a href="" style={{textDecoration:"none", color:"#cec09e"}}>Tip Jar</a></Button>
            </Grid>
           
    </Grid>
   </Container>
    
    );
        
};

export default ThankYou;
