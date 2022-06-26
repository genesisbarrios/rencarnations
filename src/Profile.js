
import { useState } from "react";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo, useLayoutEffect } from 'react';
import {db, app} from "./firebase-config";
import { getDocs, getDoc, collection, doc, getFirestore, query, limit, where, FieldPath } from "firebase/firestore";
import './styles.css';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid'
import Paper from "@material-ui/core/Paper";

const Profile = (props) => {
    const [loginResponse, setLoginResponse] = useState();
    const [fireStoreUser, setFireStoreUser] = useState();
    const [following, setFollowing] = useState();
 
    let deso = props.deso;

  const tableStyle = {
      backgroundColor: '#192026'
  };

  useEffect(() => {
    console.log('use effect');
    if(props.fireStoreUser){
        setFireStoreUser(props.fireStoreUser);
        console.log(fireStoreUser);
      }

    if(props.loginResponse){
      setLoginResponse(props.loginResponse);
      console.log(loginResponse);
    }

    const checkFollowing = async () => {
        console.log('check following');
        const ref = collection(db, "Following");
        const q = query(ref, where("UserId", "==", fireStoreUser.id));// limit(1),

        const querySnapshot = await getDocs(q);
        if(querySnapshot.docs.length === 0){
          console.log('empty');
        }else{
          var array = [];
          querySnapshot.forEach((doc) => {
              array.push(doc.data().SpacesId);
          });
          console.log(array);
          setFollowing(array);
        }
      }

      if(fireStoreUser){
        if(!following){
         checkFollowing();
        }
      }

  }, [loginResponse, following, deso]);

  return(
    <div>
        {loginResponse && 
            <Container id="ProfileContainer">
                <h2 style={{marginTop: 0}}>Profile</h2>
                <p>Username: {loginResponse.Profile.Username}</p>
                <p>PublicKey: {loginResponse.Profile.PublicKeyBase58Check}</p>
                <p>Description: {loginResponse.Profile.Description}</p>
                <p>Verified: {JSON.stringify(loginResponse.Profile.IsVerified)}</p>

               { following && <div>
                    <h2>Following</h2>
                    {following.map((doc) => (
                        <p>{doc}</p>
                    ))}
                </div>}

                <div>
                    <h2>Friends</h2>
                </div>

                <button
                onClick={() => {
                  deso.identity.logout(deso.identity.getUserKey());
                }}
              id="logoutButton">
                Logout
              </button>
          </Container>}
    </div>
    );
        
};

export default Profile;
