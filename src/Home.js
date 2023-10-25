
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

const Home = (props) => {
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
            <p style={{textAlign:"center", fontFamily:"Helvetica"}}><a href="/StayInTouch" className="links" style={{textDecoration:"none", color:"#e4ddf3"}}>stay in touch</a>  </p>
            
            
            <div style={{textAlign:"center", fontFamily:"Helvetica", marginBottom:"10px", color:"white"}}>
              <p className="mt-5 mb-2" style={{color:"white", fontSize:'0.8em'}}>July 19, 2020</p>
                <img src="ren1.png" width="600px"></img>
                <p className="m-auto mt-2 mb-2 w-50">About a month ago, a lovely group of ladies featured me in their creative magazine called “The Angel Archives”. I haven’t been able to speak on it since there were and still are many things happening around us that require our attention. The focus should still be on that, always. With that said, this was something I was a part of that made my heart very happy and wanted to share. If I ever become some big somebody (ja!) this was my very beginning and I’m so thankful for it.✨🖤✨</p>
                <Button className="mb-5" style={{border:"1px solid #cec09e", color:"#cec09e"}}><a href="https://www.instagram.com/p/CC1uQD0DXPLARavLVVdE12pKzH2xwJ1_QAIYG80/" target="_blank" style={{textDecoration:"none", color:"#cec09e"}}>Share</a></Button>
            </div>

            <div style={{textAlign:"center", fontFamily:"Helvetica", marginBottom:"10px", color:'white'}}>
              <p className="mt-5 mb-2" style={{color:"white", fontSize:'0.8em'}}>Nov. 22, 2020</p>
              <img src="ren2.png" width="600px"></img>
              <p className="m-auto mt-2 mb-2 w-50">One year ago today I released my first EP. Loooots of things have changed since then. 2020 brought me new opportunities, new ideas, and new people to rearrange my sound+mind. I released a single, a music video, and currently working on (wait for it)...an LP. 
              </p>
              <p className="m-auto mt-2 mb-2 w-50">
              OOof just saying that gives me
              ⚡️🦋⚡️🌪💫🌪⚡️🦋⚡️
              </p>
              <p className="m-auto mt-2 mb-2 w-50">
              THANK YOU for streaming. THANK YOU for watching. THANK YOU for listening to the things that go on inside my head manifested in real life!
              I look forward to unraveling on and on and on and 🤍</p>
              <Button className="mb-5" style={{border:"1px solid #cec09e", color:"#cec09e"}}><a href="https://www.instagram.com/p/CH5dJLxDTe41_8uT6rSO5ar48UEUxxYxt2tMUU0/" target="_blank" style={{textDecoration:"none", color:"#cec09e"}}>Share</a></Button>
            </div>
          
            <div style={{textAlign:"center", fontFamily:"Helvetica", marginBottom:"10px", color:'white'}}>
              <p className="mt-5 mb-2" style={{color:"white", fontSize:'0.8em'}}>Nov. 22, 2019</p>
              <img src="ren5.png" width="600px"></img>
              <p className="m-auto mt-2 mb-2 w-50">Hoy es el día...✨🥺🧚🏼‍♀️✨ The “Visual Experiments EP” is officially OUT on all streaming services (including SoundCloud 🏴‍☠️ l m a o)The link is in my bio. do ya tiiinng 😎🌪⚡️🦋🤡</p>
              <Button className="mb-5" style={{border:"1px solid #cec09e", color:"#cec09e"}}><a href="https://www.instagram.com/p/B5L6W1vD9u-Z-Tk14CdTjm0Ro3DSDp6HLLNMB00/?img_index=1" target="_blank" style={{textDecoration:"none", color:"#cec09e"}}>Share</a></Button>
            </div>
            <div style={{textAlign:"center", fontFamily:"Helvetica", marginBottom:"10px", color:'white'}}>
            <p className="mt-5 mb-2" style={{color:"white", fontSize:'0.8em'}}>Nov. 22, 2019</p>
              <img src="ren3.png" width="600px"></img>
              <p className="m-auto mt-2 mb-2 w-50">To the beautiful souls who acted as my participants for the album art experiment, a thousand thankyou’s. You know who you are. Your secret is safe with me 💌. As for anyone else who ever said “hey, good luck with that music thing or whatever!”: THANK YOU. Thank you to ALL THE HOMIES, CRITICS, STRANGERS, AND NONBELIEVERS! You are ALL my family 💛!</p>
              <Button className="mb-5" style={{border:"1px solid #cec09e", color:"#cec09e"}}><a href="https://www.instagram.com/p/B5L6W1vD9u-Z-Tk14CdTjm0Ro3DSDp6HLLNMB00/?img_index=2" target="_blank" style={{textDecoration:"none", color:"#cec09e"}}>Share</a></Button>
            </div>
            <div style={{textAlign:"center", fontFamily:"Helvetica", marginBottom:"10px", color:'white'}}>
             <p className="mt-5 mb-2" style={{color:"white", fontSize:'0.8em'}}>Nov. 22, 2019</p>
              <img src="ren4.png" width="600px"></img>
              <p className="m-auto mt-2 mb-2 w-50">I am overwhelmed with all kinds of emotions. This whole thing was so daunting to make (just writing that gave me war flashbacks of the last couple of years 😂) But I can’t wait to continue doing it for the rest of my days. It’s all I am. Hope to see you guys along the ride. 💫</p>
              <Button className="mb-5" style={{border:"1px solid #cec09e", color:"#cec09e"}}><a href="https://www.instagram.com/p/B5L6W1vD9u-Z-Tk14CdTjm0Ro3DSDp6HLLNMB00/?img_index=3" target="_blank" style={{textDecoration:"none", color:"#cec09e"}}>Share</a></Button>
            </div>
            
            <div style={{textAlign:"center", fontFamily:"Helvetica", marginBottom:"10px", color:'white'}}>
              <p className="mt-5 mb-2" style={{color:"white", fontSize:'0.8em'}}>Nov. 17, 2019</p>
              <img src="ren6.png" width="600px"></img>
              <p className="m-auto mt-2 mb-2 w-50">“Walk in from outer space... Do you see what I hear?”</p>
              <Button className="mb-5" style={{border:"1px solid #cec09e", color:"#cec09e"}}><a href="https://www.instagram.com/p/B4_fTZYDWBlEYxRF4T3Gn27bwhcXlraxK-bHwQ0/?img_index=1" target="_blank" style={{textDecoration:"none", color:"#cec09e"}}>Share</a></Button>
            </div>

            <p style={{textAlign:"center", fontFamily:"Helvetica"}}><a href="/Contact" className="links" style={{textDecoration:"none", color:"#cec09e"}}>contact</a></p>
            <p style={{textAlign:"center", fontFamily:"Helvetica"}}><a href="#" className="links" style={{textDecoration:"none", color:"#cec09e"}}>𐦍</a></p>
          </Grid>
          <Grid item sm={2}> </Grid>
        </Grid>
    </div>
      );
          
};

export default Home;
