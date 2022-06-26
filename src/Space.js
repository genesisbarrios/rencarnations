
import { useEffect, useMemo, useState, Fragment, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import {db, app} from "./firebase-config";
import { getDocs, addDoc, collection, doc, getFirestore, query, limit, where, FieldPath, deleteDoc, getDoc } from "firebase/firestore";
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams, 
} from "react-router-dom";
import './styles.css';

const Space = (props) => {
  let deso = props.deso;
  let { id } = useParams();
  const [space, setSpace] = useState();
  const [fireStoreUser, setFireStoreUser] = useState();
  const [following, setFollowing] = useState();
  const [followers, setFollowers] = useState();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ref = collection(db, "Spaces");

    const getSpace = async () => {
     const querySnapshot = await getDocs(ref, id);
      querySnapshot.forEach((doc) => {
        //console.log("doc:", doc.id, " => ", doc.data());
        if(doc.id == id){
          setSpace( {id:doc.id, ...doc.data()} );
        }
        });
    }

    const checkFollowing = async () => {
      //console.log('check following');
      const ref = collection(db, "Following");
      const q = query(ref, where("SpacesId", "==", id));// limit(1),

      const querySnapshot = await getDocs(q);
      if(querySnapshot.docs.length === 0){
        //console.log('empty')
          setFollowing(false);
      }else{
        querySnapshot.forEach((doc) => {
          if(doc.data().UserId == fireStoreUser.id){
            //console.log('following');
            setFollowing(true);
          }
        });
      }
    }
    
    const isFollowing  = async(pubKey) => {
      console.log('is following');
      const request = {
        "PublicKeyBase58Check": fireStoreUser.PublicKey,
        "IsFollowingPublicKeyBase58Check": pubKey
      };
      const response = await deso.social.isFollowingPublicKey(request);
      //console.log(response.data)
      return response.data;
    }

    const getFollowers = async () => {
      console.log('get followers');

      const ref = collection(db, "Following");
      const q = query(ref, where("SpacesId", "==", id));//limit(1), 

      const querySnapshot = await getDocs(q);

      if(querySnapshot.docs.length === 0){
        //console.log('empty')
      }else{

        let userIdArray = [];
        querySnapshot.forEach((doc) => {
            userIdArray.push(doc.data().UserId);
        });

        let followersarray = [];
        const usersref = collection(db, "Users");

        if(userIdArray.length > 1){
        userIdArray.forEach(async(userDoc) => {
            const userquerySnapshot = await getDocs(usersref, limit(1), userDoc);
            
            userquerySnapshot.forEach(async(userdoc) => {
              let isFollow = await isFollowing(userdoc.data().PublicKey);
             // console.log(isFollow);
              followersarray.push({isFollowing: isFollow, ...userdoc.data()});
            });
        })
        setFollowers(followersarray);
      }
      }
    }

    if(fireStoreUser && space){//check following
      checkFollowing();

      if(!followers){
        getFollowers();
      }

      if(followers){
        console.log(followers);
      }
    }

    getSpace();
  }, [space, followers]);

  useEffect(() => {

    if(props){
      setFireStoreUser(props.fireStoreUser);
      //console.log(fireStoreUser);
    }
   
  }, [fireStoreUser, following, space]);

  const processFollow = async() => {
    const ref = collection(db, "Following");

        console.log('Adding Follow');

        const res = await addDoc(ref, {
            UserId: fireStoreUser.id,
            SpacesId: space.id
        }, {merge: true});
        console.log(res);

        setFollowing(true);
  }

  const addFriend = async(pubKey) => {
    const request = {
      "IsUnfollow": false,
      "FollowedPublicKeyBase58Check": pubKey,
      "FollowerPublicKeyBase58Check": fireStoreUser.PublicKey
    };
     const response = await deso.social.createFollowTxnStateless(request);
     console.log(response);
     navigate("/Profile");
  }

const unFriend = async(pubKey) => {
  const request = {
    "IsUnfollow": true,
    "FollowedPublicKeyBase58Check": pubKey,
    "FollowerPublicKeyBase58Check": fireStoreUser.PublicKey
  };
   const response = await deso.social.createFollowTxnStateless(request);
   console.log(response);
   navigate("/Profile");
}

  const processUnFollow = async() => {
    console.log('Removing Follow');

    const getAndDeleteDoc = async () => {
      const ref = collection(db, "Following");
      const q = query(ref, where("UserId", "==", fireStoreUser.id));// limit(1),

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        if(doc.data().SpacesId == id){
          console.log('delete doc');
          let res = deleteDoc(doc.ref);
          console.log(res);
          setFollowing(false);
        }
      });
    }
    getAndDeleteDoc();
    navigate("/Spaces");
  }


  return (
    <Container style={{paddingTop:"20px", paddingBottom:"20px", minHeight: "100vh", color:"white", width: "60%", margin: "0 auto"}}>
      <div>
        {space &&(
          <div>
                <h2 style={{marginTop:0}}> {space.name} </h2>
                <div><img src={space.image} style={{width: "200px"}}/></div>
                <p>Address: {space.address}</p>
                <p>Phone: {space.phone}</p>
                <p><a href={space.website} className="spaceslinks">Website</a></p>
                <p>Category: {space.category}</p>
          </div>
        )}

       {!following && (
                <button onClick={async () => {
                  processFollow();
                }} id="followButton">Follow</button>
        )}

        {following && (
             <button onClick={async () => {
              processUnFollow();
            }} id="unfollowButton">Unfollow</button>
        )}

        { followers && <div>
          <h3>Followers</h3>
            {followers.map((doc) => (
                <p style={{marginBottom: 0}}>{doc.username} 
                {!doc.isFollowing.IsFollowing &&  <button onClick={ () => { addFriend(doc.PublicKey);}} id="addFriendButton">Add Friend</button>}
                {doc.isFollowing.IsFollowing &&  <button onClick={ () => { unFriend(doc.PublicKey);}} id="unFriendButton">Unfriend</button>}
                </p>
            ))}
        </div>
        }

        {!space && <h3>loading...</h3>}
      </div>
    </Container>
  );
};



export default Space;