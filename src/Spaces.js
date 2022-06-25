
import { useState } from "react";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo, useLayoutEffect } from 'react';
import {db, app} from "./firebase-config";
import { getDocs, collection, deleteDoc, doc, getFirestore } from "firebase/firestore";
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";

const Spaces = (props) => {
  const [spaces, setSpaces] = useState();
  const [loginResponse, setLoginResponse] = useState();


  let deso = props.deso;

  const SpacesContainerStyles = {
     width:"60%",
     margin: "0 auto"
  };

  const spacesStyle = {
    border: "1px solid black",
    borderRadius: "5%",
    marginBottom: "3%"
  }

  const spacesImgStyle = {
    width: "300px"
  } 
  
  useEffect(() => {
    console.log('use effect');
    if(props.loginResponse){
      setLoginResponse(props.loginResponse);
      console.log(loginResponse);
    }

    if(spaces){
      console.log(spaces);
    }
  }, [loginResponse]);

  useLayoutEffect(() => {
    const ref = collection(db, "Spaces");

    const getSpaces = async () => {
      const data = await getDocs(ref);
      console.log(data);
      setSpaces( data.docs.map( (doc) => ({id:doc.id, ...doc.data()}) ) );
    }

    getSpaces();

  }, []);


  return(
    <Container style={SpacesContainerStyles}>
      <h2>Spaces</h2>
        {spaces && (
          <div>
            {spaces.map((doc) => (
              <Link to={`/Spaces/${doc.id}`} key={doc.id}>
                <div style={spacesStyle}>
                  <p>{JSON.parse(JSON.stringify(doc.name))} </p>
                  <img src={JSON.parse(JSON.stringify(doc.image))} style={spacesImgStyle}/>
                 </div>
              </Link>
            ))}
          </div>
        )}
    </Container>
    );
        
};

export default Spaces;
