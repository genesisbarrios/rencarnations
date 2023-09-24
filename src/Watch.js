import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo, useLayoutEffect, useRef } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid'
import Paper from "@material-ui/core/Paper";

const Watch = (props) => {
    const [alert, setAlert] = useState();
   
    const navigate = useNavigate();

    //add user to firestore if not added yet
   

    useEffect(() => {
       
    }, []);

    useLayoutEffect(()=>{
    })
    return (
        <div>
            <h2>Watch</h2>
           

                {alert && <p style={{color:"#2A0000", textAlign:"center"}}>{alert}</p>}
         </div>
    );
          
};

export default Watch;
