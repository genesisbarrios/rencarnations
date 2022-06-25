
import { useState } from "react";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo, useLayoutEffect } from 'react';
import {db, app} from "./firebase-config";
import { getDocs, collection, deleteDoc, doc, getFirestore } from "firebase/firestore";
import Container from 'react-bootstrap/Container';

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
  }, [loginResponse]);

  useLayoutEffect(() => {
    const ref = collection(db, "Spaces");

    const getSpaces = async () => {
      const data = await getDocs(ref);
      console.log('getSpaces'+data);
      setSpaces( data.docs.map( (doc) => ({ ...doc.data()}) ) );
      console.log(spaces);
    }

    getSpaces();
  }, []);


  return(
    <Container style={SpacesContainerStyles}>
      <h2>Spaces</h2>
        {spaces && (
          <div>
            {spaces.map((doc) => (
              <div style={spacesStyle}>
                 <p>{JSON.parse(JSON.stringify(doc.name))} </p>
                 <img src={JSON.parse(JSON.stringify(doc.image))} style={spacesImgStyle}/>
                 <div><a href={JSON.parse(JSON.stringify(doc.website))} target="_blank" style={{textDecoration: "none"}}>Website</a></div>
                 </div>
            ))}
          </div>
        )}
    </Container>
    );
        
};

export default Spaces;
