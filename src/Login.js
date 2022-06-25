import { useState } from "react";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo, useLayoutEffect } from 'react';
import {db, app} from "./firebase-config";
import { getDocs,getDoc, collection, deleteDoc, doc, getFirestore, query, where, addDoc } from "firebase/firestore";

const Login = (props) => {
    let deso = props.deso;
    let callbackFunction = props.parentCallback;
    const [desoUser, setDesoUser] = useState();
    const [firestoreUser, setFireStoreUser] = useState();

    //add user to firestore if not added yet
    const checkFirestore = async () => {
        console.log('check firestore');
        if(desoUser){
            console.log(desoUser.key)
            const ref = collection(db, "Users");
            const q = query(ref, where("username", "==", desoUser.Profile.Username));

            const querySnapshot = await getDocs(q);
            if(querySnapshot.docs.length === 0){
                console.log('Welcome to Alphabet Spaces. Adding you to our database..');
                //const docResp = await setDoc(ref, {});
                const res = await addDoc(ref, {
                    PublicKey: JSON.stringify(desoUser.Profile.PublicKeyBase58Check),
                    description: JSON.stringify(desoUser.Profile.Description),
                    isVerified: JSON.stringify(desoUser.Profile.IsVerified),
                    username: JSON.stringify(desoUser.Profile.Username)
                });
                //console.log(res);
            }else{
                querySnapshot.forEach((doc) => {
                    console.log("doc:", doc.id, " => ", doc.data());
                    setFireStoreUser( doc.data());
                });
            }
        }
    }

    useEffect(() => {
        checkFirestore();
    }, [firestoreUser, desoUser]);

    const tableStyle = {
        backgroundColor: '#192026'
    };

    return (
        <button
            onClick={async () => {
                const userLogin = await deso.identity.login();

                const user = await deso.user.getSingleProfile({
                    PublicKeyBase58Check: deso.identity.getUserKey(),
                  });
                console.log(user);
                const desoUserResp = JSON.parse(JSON.stringify(user, null, 2));
                setDesoUser(desoUserResp);

                callbackFunction(desoUserResp);
                checkFirestore();
            }}
            >
            login
        </button>
    );
          
};

export default Login;
