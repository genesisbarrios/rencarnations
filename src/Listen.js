
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
import { motion } from 'framer-motion';
const Listen = (props) => {
  const [spotifyHover, setSpotifyHover] = useState(false);
  const [appleHover, setAppleHover] = useState(false);
  const [soundcloudHover, setSoundcloudHover] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
    if(window){
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
    }
  }, []);

  useEffect(() => {
    if(width && width <= 768){
      setSpotifyHover(true);
      setAppleHover(true);
      setSoundcloudHover(true);
    }

  }, [width]);

  useLayoutEffect(() => {
  

  }, []);

  

  return(
    <Container style={{minHeight:"82vh", textAlign:"center", fontFamily:"Arial", letterSpacing:"3px"}}>
       <h1 style={{color:"#cec09e", margin: "5% 0", fontSize:"16px"}}>streaming services</h1>
      <Grid container>
            <Grid item sm={12} md={4} style={{marginBottom:"10px"}}>
              <motion.div whileHover={{ scale: 1.1 }} onHoverStart={e => {setSpotifyHover(true)}} onHoverEnd={e => {setSpotifyHover(false)}} whileTap={{ scale: 0.8 }}>
                  <a href="https://open.spotify.com/artist/30NyqNKNWpM78K2NMq1JqE" target="_blank" style={{textDecoration:"none", color:'white'}}>
                    <img src="/images/trees.gif" style={{width:"90%"}}></img>
                    {spotifyHover && <p style={{marginTop:"-20%", fontWeight:"400"}}>spotify</p>}
                  </a>
                </motion.div>
            </Grid>
            <Grid item sm={12} md={4} style={{marginBottom:"10px"}}>
              <motion.div whileHover={{ scale: 1.1 }} onHoverStart={e => {setAppleHover(true)}} onHoverEnd={e => {setAppleHover(false)}} whileTap={{ scale: 0.8 }}>
                <a href="https://music.apple.com/us/artist/ren/1486463057" target="_blank" style={{textDecoration:"none", color:'white'}}>
                <img src="/images/mailbox.gif" style={{width:"90%"}}></img>
                {appleHover && <p style={{marginTop:"-20%", fontWeight:"400"}}>apple music</p>}
                </a>
              </motion.div>
            </Grid>
            <Grid item sm={12} md={4} style={{marginBottom:"10px"}}>
             <motion.div whileHover={{ scale: 1.1 }} onHoverStart={e => {setSoundcloudHover(true)}} onHoverEnd={e => {setSoundcloudHover(false)}} whileTap={{ scale: 0.8 }}>
                <a href="https://soundcloud.com/rencarnations" target="_blank" style={{textDecoration:"none", color:'white'}}>
                  <img src="/images/letter.gif" style={{width:"90%"}}></img>
                  {soundcloudHover && <p style={{marginTop:"-20%", fontWeight:"400"}}>soundcloud</p>}
              </a>
             </motion.div>
            </Grid>
          
    </Grid>
   
   </Container>
    
    );
        
};

export default Listen;
