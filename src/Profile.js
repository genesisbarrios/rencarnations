
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

  return(
    <div>
      <button
          onClick={() => {
            deso.identity.logout(deso.identity.getUserKey());
          }}
        >
          logout
        </button>
        <button
          onClick={async () => {
            const user = await deso.user.getSingleProfile({
              PublicKeyBase58Check: deso.identity.getUserKey(),
            });
            console.log(user);
            setSampleResponse(JSON.stringify(user, null, 2));
          }}
        >
          get user
        </button>
        <div>
          User info
          <pre>{sampleResponse}</pre>
        </div>
    </div>
    );
        
};

export default Spaces;
