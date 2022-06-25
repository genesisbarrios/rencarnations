
import { useState } from "react";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo } from 'react';

const Profile = (props) => {
    const [loginResponse, setLoginResponse] = useState();

  let deso = props.deso;
  let callbackFunction = props.parentCallback;

  const tableStyle = {
      backgroundColor: '##192026'
  };

  useEffect(() => {
    console.log('use effect');
    if(props.loginResponse){
      setLoginResponse(props.loginResponse);
      console.log(loginResponse);
    }
  }, [loginResponse]);

  return(
    <div>
      <button
          onClick={() => {
            deso.identity.logout(deso.identity.getUserKey());
          }}
        >
          logout
        </button>
        {loginResponse && 
            <div>
                <h2>Profile</h2>
                <p>Username: {loginResponse.Profile.Username}</p>
                <p>PublicKey: {loginResponse.Profile.PublicKeyBase58Check}</p>
                <p>Description: {loginResponse.Profile.Description}</p>
                <p>Verified: {JSON.stringify(loginResponse.Profile.IsVerified)}</p>

                <div>
                    <h2>Following</h2>
                </div>

                <div>
                    <h2>Friends</h2>
                </div>
            </div>}
    </div>
    );
        
};

export default Profile;
