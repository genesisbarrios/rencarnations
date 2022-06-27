
import { useState } from "react";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo, useLayoutEffect } from 'react';
import {db, app} from "./firebase-config";
import { useNavigate } from "react-router-dom";
import { getDocs, getDoc, collection, doc, getFirestore, query, limit, where, FieldPath } from "firebase/firestore";
import './styles.css';
import Container from 'react-bootstrap/Container';
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

const Profile = (props) => {
    const [loginResponse, setLoginResponse] = useState();
    const [fireStoreUser, setFireStoreUser] = useState();
    const [following, setFollowing] = useState();
    const [friends, setFriends] = useState();
    const [pfp, setPFP] = useState();
    const navigate = useNavigate();
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
          //console.log('empty');
        }else{
          var array = [];
          querySnapshot.forEach((doc) => {
              array.push(doc.data().SpacesId);
          });
          //console.log(array);
          setFollowing(array);
        }
      }

      if(fireStoreUser){
        if(!following){
         checkFollowing();
        }
        if(!friends){
          getFriends(fireStoreUser.PublicKey);
        }
        if(!pfp){
          getPFP();
        }
      }

  }, [loginResponse, following, deso]);

  const getPFP = async() => {
    const request = fireStoreUser.PublicKey;
    const response = await deso.user.getSingleProfilePicture(request);
    setPFP(response);
  }

  const getFriends = async(pubKey) => {
    console.log('get following');
    const request = {
      "PublicKeyBase58Check": pubKey,
      "NumToFetch": 20
    };
     const response = await deso.social.getFollowsStateless(request);
     let users = response.PublicKeyToProfileEntry;
      let usrs = Object.values(users);
     setFriends(usrs);
     console.log(usrs);
  }

  const processUnFollow = async(pubKey) => {
    const request = {
      "IsUnfollow": true,
      "FollowedPublicKeyBase58Check": pubKey,
      "FollowerPublicKeyBase58Check": fireStoreUser.PublicKey
    };
     const response = await deso.social.createFollowTxnStateless(request);
     console.log(response);
     navigate("/");
  }


  return(
    <div>
        {loginResponse && pfp &&
            <Container id="ProfileContainer">
                <h1 style={{marginTop: 0}}>Profile</h1>
                <img src={pfp}></img>
                <h4>{loginResponse.Profile.Username} {Boolean(loginResponse.Profile.IsVerified) && <FontAwesomeIcon icon={faCheckCircle} />}</h4>
                <p><FontAwesomeIcon icon={faWallet} />{loginResponse.Profile.PublicKeyBase58Check}</p>
                {loginResponse.Profile.Description &&  <p> {loginResponse.Profile.Description} </p>}

               { following && <div style={{marginTop: "5%"}}>
                    <h2 >Following</h2>
                    {following.map((doc) => (
                        <p> <Link to={`/Spaces/${doc}`} key={doc} firestoreUser={fireStoreUser} className="spaceslinks">{doc}</Link></p>
                    ))}
                </div>}

                { friends && <div style={{marginTop: "5%"}}>
                    <h2>Friends</h2>
                    <Grid container spacing={2}>
                    {friends.map((doc) => (
                      <>
                        <Grid item xs={4}>
                         <p className="usernameP">{doc.Username.substring(0,25)}</p>
                        </Grid>
                         <Grid item xs={8}>
                        <button onClick={async () => {
                          processUnFollow(doc.PublicKeyBase58Check);
                        }} className="unFriendButton">Unfollow</button>
                        </Grid>
                      </>
                    ))}
                    </Grid>
                </div>}

                <button
                onClick={() => {
                  deso.identity.logout(deso.identity.getUserKey());
                  navigate("/");
                }}
              id="logoutButton">
                Logout
              </button>
          </Container>}
    </div>
    );
        
};

export default Profile;
