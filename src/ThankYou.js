
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
    <Grid container style={{minHeight:"87vh", marginTop:"5%", width:"100%", fontFamily:"Garamond"}}>
      <Grid item sm={12} md={6} style={{textAlign:"center"}}>
          <img src="tipjar.jpg" style={{width:"65%"}}></img>
      </Grid>
      <Grid item md={6} sm={12} style={{marginTop:"12%", textAlign:"center"}}>
        <div>
          <h1 style={{color:"#cec09e", margin: "5% 0", fontSize:'1.5em'}}>thank you</h1>   
          <p style={{color:"#cec09e"}}>through every phase, thank you for your continued support.</p>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Button style={{border:"1px solid #cec09e", color:"#cec09e", marginTop:'20px'}}><a href="https://ko-fi.com/rencarnations" target="_blank" style={{textDecoration:"none", color:"#cec09e"}}>Tip Jar</a></Button>
          </motion.div>
        </div>
      </Grid>
    </Grid>
    
    );
        
};

export default ThankYou;
