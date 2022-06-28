
import { useState } from "react";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo, useLayoutEffect } from 'react';
import {db, app} from "./firebase-config";
import { getDocs, collection, deleteDoc, doc, getFirestore } from "firebase/firestore";
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid'
import Paper from "@material-ui/core/Paper";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import './styles.css';

const Spaces = (props) => {
  const [spaces, setSpaces] = useState();
  const [loginResponse, setLoginResponse] = useState();
  const [fireStoreUser, setFireStoreUser] = useState();

  let deso = props.deso;

  const SpacesContainerStyles = {
     width:"60%",
     margin: "0 auto"
  };

  const spacesImgStyle = {
    maxWidth: "150px",
    marginLeft:"10px",
    borderRadius: "15px"
  } 
  
  useEffect(() => {
    console.log('use effect');
    if(props.loginResponse){
      setLoginResponse(props.loginResponse);
      //console.log(loginResponse);
    }

    if(props.fireStoreUser){
      setFireStoreUser(props.fireStoreUser);
      //console.log(fireStoreUser);
    }
  }, [loginResponse, fireStoreUser]);

  useLayoutEffect(() => {
    const ref = collection(db, "Spaces");

    const getSpaces = async () => {
      const data = await getDocs(ref);
      //console.log(data);
      setSpaces( data.docs.map( (doc) => ({id:doc.id, ...doc.data()}) ) );
    }

    getSpaces();

  }, [spaces]);

  const stylez = {
    height:"200px",
    maxHeight:"300px",
    backgroundColor: "#ECEFF1",
    border: "1px solid grey",
    boxShadow: "-0.1rem 0.1rem 0 rgb(217, 219, 219, 0.4)",
    borderRadius: "5px",
    paddingLeft:"10px"
  };

  const GridItemStyles = {
    marginTop:"5%"
  };

  return(
    <Container style={SpacesContainerStyles} id="SpacesContainer">
      <h2 style={{marginTop:0}}>SPACES</h2>
        {spaces && (
          <Grid container spacing={2}>
            {spaces.map((doc) => (
              <Grid item xs={12} md={6} >
                <Paper style={stylez}>
                  <Link to={`/Spaces/${doc.id}`} key={doc.id} firestoreUser={fireStoreUser} className="spacescardslinks">
                      <Grid container spacing={2} style={GridItemStyles}>
                        <Grid item xs={12} md={6}>
                            <img src={JSON.parse(JSON.stringify(doc.image))} style={spacesImgStyle} className="spacesImg"/>
                          </Grid>
                         <Grid item xs={12} md={6}>
                             <h4>{JSON.parse(JSON.stringify(doc.name))} </h4>
                             <p>{JSON.parse(JSON.stringify(doc.address))} </p>
                        </Grid>
                      </Grid>
                  </Link>
              </Paper>
              </Grid>
            ))}
          </Grid>
        )}
         <Link to={`/CreateSpace`} key={doc.id} firestoreUser={fireStoreUser}>
            <button id="CreateSpaceButton"> Create Space </button>
        </Link>
    </Container>
    
    );
        
};

export default Spaces;
