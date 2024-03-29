
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
import axios from 'axios';
import { Container, Card, Button } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';

import { IconGlobe, IconBrandInstagram, IconBrandSoundcloud, IconBrandYoutube, IconBrandPatreon, IconMusic } from '@tabler/icons-react';

const Home = (props) => {
  const uniqueId = uuidv4();

    const navigate = useNavigate();
    const [Posts, setPosts] = useState(null);

    const tableStyle = {
        backgroundColor: '#192026'
    };

    useEffect(() => {
      //fetchData();
    }, []);

    const fetchData = async () => {
      const response = await axios.get(`https://graph.facebook.com/2045541099?access_token={}`)
      console.log(response);
  
      setPosts(response.data.data);
    };


  //ig grid
    return(
      <div>
        <Grid container spacing={2}> 
          <Grid item sm={2}> </Grid >
          <Grid item sm={8}>
            
              <p style={{textAlign:"center", fontFamily:"Arial", fontSize:"13px"}}><a href="/StayInTouch" className="links" style={{textDecoration:"none", color:"#f2e9f8"}}>stay in touch</a>  </p>
       
            <div style={{textAlign:"center", fontFamily:"Arial", marginBottom:"8%", color:'white'}}>
              <p className="mt-5 mb-2" style={{color:"white", fontSize:'10px', letterSpacing:"2px", paddingBottom:"5%"}}>Nov 17th, 2023</p>
              <iframe width="80%" height="600px" src="https://www.youtube.com/embed/Fh3t2rFjB08?si=dAlOgWw6samFXFoO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <p className="m-auto mt-2 mb-2 w-50" style={{fontSize:'13px', paddingTop:"5%"}}>{"sleep apnea. out now"}</p>
              {/* <Button className="mb-5" style={{border:"1px solid #cec09e", color:"#cec09e"}}><a href="https://www.youtube.com/embed/EXAYYSt9Yqw?si=785R3AD6yA4AQY8q" target="_blank" style={{textDecoration:"none", color:"#cec09e"}}>Share</a></Button> */}
            </div>
       
            <div style={{textAlign:"center", fontFamily:"Arial", marginBottom:"8%", color:'white'}}>
              <p className="mt-5 mb-2" style={{color:"white", fontSize:'10px', letterSpacing:"2px", paddingBottom:"5%"}}>July 28th, 2023</p>
              <iframe width="80%" height="600px" src="https://www.youtube.com/embed/EXAYYSt9Yqw?si=785R3AD6yA4AQY8q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <p className="m-auto mt-2 mb-2 w-50" style={{fontSize:'13px', paddingTop:"5%"}}>{"for someone special <3"}</p>
              {/* <Button className="mb-5" style={{border:"1px solid #cec09e", color:"#cec09e"}}><a href="https://www.youtube.com/embed/EXAYYSt9Yqw?si=785R3AD6yA4AQY8q" target="_blank" style={{textDecoration:"none", color:"#cec09e"}}>Share</a></Button> */}
            </div>

            <div style={{marginTop:"10%", textAlign:"center", fontFamily:"Arial", marginBottom:"10px", color:'white'}}>
             <p className="mt-5 mb-2" style={{color:"white", fontSize:'10px', letterSpacing:"2px", paddingBottom:"5%"}}>July 5th, 2020</p>
             <iframe width="80%" height="600px" src="https://www.youtube.com/embed/hQq3hcBkdVg?si=Ys8Zc6TQ4oMU-KA9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             <br></br>
           
            </div>
       
            <div className="m-auto mt-2 mb-2 w-50" style={{textAlign:"center"}}>
              <p>
                <a href="https://www.youtube.com/@rencarnations" target="_blank" style={{textDecoration:"none", marginRight:"20px", color:"white"}}><IconBrandYoutube></IconBrandYoutube></a>
                <a href="https://www.instagram.com/oiranimes.s/" target="_blank" style={{textDecoration:"none", color:"white"}}><IconBrandInstagram></IconBrandInstagram></a>
              </p>
            </div>

            <p style={{textAlign:"center", fontFamily:"Arial"}}><a href="/Contact" className="links" style={{textDecoration:"none", color:"#f2e9f8", fontSize:"13px"}}>contact</a></p>
            <p style={{textAlign:"center", fontFamily:"Arial"}}><a href="/Diary" className="links" style={{textDecoration:"none", color:"white",  fontSize:"13px"}}>𐦍</a></p>
          
           
          </Grid>
          <Grid item sm={2}> </Grid>
        </Grid>
    </div>
      );
          
};

export default Home;
