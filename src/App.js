import "./App.css";
import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Login from "./Login";
import Spaces from './Spaces';
import Profile from './Profile'
import {Route, Routes} from 'react-router-dom'
import { useState } from "react";

import Deso from "deso-protocol";
const deso = new Deso();


const App = () => {
  const [loginResponse, setLoginResponse] = useState();

  const callbackFunction = (childData) => {
    setLoginResponse(childData);
  }

  const SpacesComponent = () => {
    return (
     <Spaces deso={deso} parentCallback={callbackFunction} loginResponse={loginResponse}/>
    );
  }
  
  const ProfileComponent = () => {
    return (
     <Profile deso={deso} parentCallback={callbackFunction} loginResponse={loginResponse}/>
    );
  }
  if(loginResponse){
  return (
    <Routes>
      <Route path="/" element={SpacesComponent()}/>
      <Route path="/Spaces" element={SpacesComponent()}/>
      <Route path="/Profile" element={ProfileComponent()}/>
    </Routes>
  );
  }else{
    return (
      <Login deso={deso} parentCallback={callbackFunction}></Login>
    )
  }
};

export default App;


