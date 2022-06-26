import { useState } from "react";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo, useLayoutEffect } from 'react';
import {db, app} from "./firebase-config";
import { getDocs,getDoc, collection, deleteDoc, doc, getFirestore, query, where, addDoc } from "firebase/firestore";
import './styles.css';

const Login = (props) => {
    let deso = props.deso;
    let desoCallBackFunction = props.desoCallBack;
    let fireStoreCallBackFunction = props.fireStoreCallBack;

    const [desoUser, setDesoUser] = useState();
    const [firestoreUser, setFireStoreUser] = useState();

    //add user to firestore if not added yet
    const checkFirestore = async () => {
        console.log('check firestore');
        if(desoUser){
            console.log(desoUser.key)
            const ref = collection(db, "Users");
            const q = query(ref, where("username", "==", desoUser.Profile.Username));// limit(1),

            const querySnapshot = await getDocs(q);
            if(querySnapshot.docs.length === 0){
                console.log('Welcome to Alphabet Spaces. Adding you to our database..');

                const res = await addDoc(ref, {
                    PublicKey: desoUser.Profile.PublicKeyBase58Check,
                    description: desoUser.Profile.Description,
                    isVerified: desoUser.Profile.IsVerified,
                    username: desoUser.Profile.Username
                });
                //console.log(res);
            }else{
                //set firestore user
                querySnapshot.forEach((doc) => {
                    //console.log("doc:", doc.id, " => ", doc.data());
                    setFireStoreUser( {id:doc.id, ...doc.data()});
                    fireStoreCallBackFunction({id:doc.id, ...doc.data()});
                });
            }
        }
    }

    useEffect(() => {
        checkFirestore();
        if(firestoreUser){
            console.log('user effect check firestore user')
            console.log(firestoreUser);
        }
    }, [firestoreUser, desoUser]);

    const tableStyle = {
        backgroundColor: '#192026'
    };

    return (
        <div id="LoginScreen">
            <button id="loginButton"
                onClick={async () => {
                    const userLogin = await deso.identity.login();

                    const user = await deso.user.getSingleProfile({
                        PublicKeyBase58Check: deso.identity.getUserKey(),
                    });
                    //console.log(user);
                    const desoUserResp = JSON.parse(JSON.stringify(user, null, 2));
                    console.log(desoUserResp);
                    setDesoUser(desoUserResp);//set deso user info
                    desoCallBackFunction(desoUserResp);
                    checkFirestore();
                }}
                >
                Login
            </button>
        </div>
    );
          
};

export default Login;
