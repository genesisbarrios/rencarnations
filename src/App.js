import "./App.css";
import { useEffect, useMemo } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Login from "./Login";
import Spaces from './Spaces';
import Space from './Space';
import CreateSpace from './CreateSpace';
import Profile from './Profile'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState } from "react";

import Deso from "deso-protocol";
const deso = new Deso();


const App = () => {
  const [loginResponse, setLoginResponse] = useState();
  const [fireStoreUser, setFireStoreUser] = useState();

useEffect(() => {

}, [loginResponse, fireStoreUser]);

  const desoCallBackFunction = (desoResponse) => {
    setLoginResponse(desoResponse);
    console.log(desoResponse);
  }

  const fireStoreCallBackFunction = (fireStoreUser) => {
    setFireStoreUser(fireStoreUser);
    console.log('callback function')
    console.log(fireStoreUser);
  }

  const SpacesComponent = () => {
    return (
     <Spaces deso={deso} loginResponse={loginResponse}/>
    );
  }

  const SpaceComponent = () => {
    return (
     <Space deso={deso} loginResponse={loginResponse} fireStoreUser={fireStoreUser}/>
    );
  }
  
  const CreateSpaceComponent = () => {
    return (
     <CreateSpace deso={deso} loginResponse={loginResponse} fireStoreUser={fireStoreUser}/>
    );
  }
  
  const ProfileComponent = () => {
    return (
     <Profile deso={deso} loginResponse={loginResponse} fireStoreUser={fireStoreUser}/>
    );
  }

  const LoginComponent = () => {
    return (
     <Login deso={deso} fireStoreCallBack={fireStoreCallBackFunction} desoCallBack={desoCallBackFunction} loginResponse={loginResponse} fireStoreUser={fireStoreUser}/>
    );
  }

  if(loginResponse && fireStoreUser){
  return (
      <Routes>
        <Route path="/" element={SpacesComponent()}/>
        <Route exact path="/Spaces" element={SpacesComponent()}/>
        <Route exact path="/CreateSpace" element={CreateSpaceComponent()}/>
        <Route
            path="/Spaces/:id"
            element={SpaceComponent()} />
        <Route path="/Profile" element={ProfileComponent()}/>
      </Routes>
  );
  }else{
    return (
      <Login deso={deso} fireStoreCallBack={fireStoreCallBackFunction} desoCallBack={desoCallBackFunction}></Login>
    )
  }
};

export default App;


