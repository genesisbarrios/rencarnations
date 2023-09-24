
import { useState } from "react";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';
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

const Diary = (props) => {
  useEffect(() => {
   
  }, []);

 //todo: password protect
  return(
    <div>
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
    </div>
    );
        
};

export default Diary;
