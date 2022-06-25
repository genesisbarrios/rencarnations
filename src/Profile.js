
import { useState } from "react";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo } from 'react';

const Spaces = (props) => {
    const [sampleResponse, setSampleResponse] = useState();
    const [loginResponse, setLoginResponse] = useState();
    const [postResponse, setPostResponse] = useState();

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
                <p>{loginResponse.Profile.Username}</p>
                <p>{loginResponse.Profile.PublicKey}</p>
                <p>{loginResponse.Profile.Description}</p>
                <p>{loginResponse.Profile.IsVerified}</p>

            </div>}
    </div>
    );
        
};

export default Spaces;
