
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
import { Container, Card } from "@material-ui/core";

const Listen = (props) => {
  
  useEffect(() => {
  
  }, []);

  useLayoutEffect(() => {
  

  }, []);

  

  return(
    <Container style={{minHeight:"82vh", textAlign:"center", fontFamily:"Work Sans"}}>
       <h1 style={{color:"#cec09e", margin: "5% 0", fontSize:"1.5em"}}>streaming services</h1>
      <Grid container>
            <Grid item sm={4}>
                <a href="https://open.spotify.com/artist/30NyqNKNWpM78K2NMq1JqE" target="_blank"><IconBrandSpotify color="lightgreen" size={50}></IconBrandSpotify></a>
            </Grid>
            <Grid item sm={4}>
                <a href="https://music.apple.com/us/artist/ren/1486463057" target="_blank"><IconBrandApple color="pink" size={50}></IconBrandApple></a>
            </Grid>
            <Grid item sm={4}>
                <a href="https://soundcloud.com/rencarnations" target="_blank"><IconBrandSoundcloud color="orange" size={50}></IconBrandSoundcloud></a>
            </Grid>
          
    </Grid>
   
   </Container>
    
    );
        
};

export default Listen;
