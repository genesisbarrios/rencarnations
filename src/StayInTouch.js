
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
import { Container, Card } from "@material-ui/core";

import { IconBrandSpotify, IconBrandSoundcloud, IconBrandYoutube, IconBrandApple, IconBrandAmazon } from '@tabler/icons-react';

const StayInTouch = (props) => {
  
  useEffect(() => {
  
  }, []);

  useLayoutEffect(() => {
  

  }, []);

  

  return(
    <Container style={{minHeight:"82vh", textAlign:"center"}}>
      <h1 style={{color:"#cec09e", margin: "5% 0", fontSize:"1.5em", fontFamily:"Work Sans"}}>Connect</h1>

      <Grid container style={{marginBottom:"5%"}}>
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

      <div style={{width:"100%"}}>
         <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScCpT6JVpNF6C6-P7KKq4wTMdOnW7tVJ9BXTbOgTLyuu6T8jw/viewform?embedded=true" width="100%" height="1500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> 
        <div style={{height:"50px"}}></div>
      </div>
   </Container>
    
    );
        
};

export default StayInTouch;
