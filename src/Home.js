
import { useState } from "react";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {styles} from './styles.css';
import Grid from '@material-ui/core/Grid'
import Paper from "@material-ui/core/Paper";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faWallet } from '@fortawesome/free-solid-svg-icons'


const Home = (props) => {
    const navigate = useNavigate();

  const tableStyle = {
      backgroundColor: '#192026'
  };

  useEffect(() => {
   
  }, []);

 //ig grid
  return(
    <div>
      <Grid container spacing={2}> 
        <Grid item sm={2}> </Grid >
        <Grid item sm={8}>
          <p style={{textAlign:"center"}}><a href="/StayInTouch" className="links" style={{textDecoration:"none", color:"#e4ddf3"}}>stay in touch</a>  </p>
          
          <Grid container spacing={2} style={{justifyContent:"center", margin:"10% 0"}}>
            <Grid item>
              <img src="ren1.png" width="250px"></img>
            </Grid>
            <Grid item>
              <img src="ren2.png" width="250px"></img>
            </Grid>
            <Grid item>
              <img src="ren3.png" width="250px"></img>
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{justifyContent:"center", margin:"10% 0"}}>
            <Grid item>
              <img src="ren4.png" width="250px"></img>
            </Grid>
            <Grid item>
              <img src="ren5.png" width="250px"></img>
            </Grid>
            <Grid item>
              <img src="ren6.png" width="250px"></img>
            </Grid>
          </Grid>

          <p style={{textAlign:"center"}}><a href="/Contact" className="links" style={{textDecoration:"none", color:"#cec09e"}}>contact</a>  </p>
        </Grid>
        <Grid item sm={2}> </Grid>
      </Grid>
   </div>
    );
        
};

export default Home;
