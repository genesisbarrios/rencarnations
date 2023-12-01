import "./App.css";
import { useEffect, useMemo } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Listen from "./Listen";
import Contact from './Contact';
import Diary from './Diary';
import TumblrLogin from './TumblrLogin';
import Watch from './Watch';
import TakeAction from "./TakeAction";
import ThankYou from './ThankYou';
import StayInTouch from './StayInTouch'
import Home from './Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState } from "react";
import Layout from "./Layout";
import "./styles.css";

const App = () => {
 
useEffect(() => {

}, []);

  

  const HomeComponent = () => {
    return (
      <Layout>
        <Home/>
     </Layout>
    );
  }

  const ListenComponent = () => {
    return (
     <Layout>
        <Listen/>
     </Layout>
    );
  }

  const ContactComponent = () => {
    return (
      <Layout>
        <Contact/>
     </Layout>
    );
  }
  
  const DiaryComponent = () => {
    return (
      <Layout>
        <Diary/>
     </Layout>
    );
  }

  const TumblrLoginComponent = () => {
    return (
      <Layout>
        <TumblrLogin/>
     </Layout>
    );
  }

  const WatchComponent = () => {
    return (
      <Layout>
       <Watch/>
     </Layout>
    );
  }

  const ThankYouComponent = () => {
    return (
      <Layout>
       <ThankYou/>
     </Layout>
    );
  }

  const TakeActionComponent = () => {
    return (
      <Layout>
       <TakeAction/>
     </Layout>
    );
  }

  const StayInTouchComponent = () => {
    return (
       <StayInTouch/>
    );
  }

  return (
      <Routes>
        <Route path="/" element={HomeComponent()}></Route>
        <Route path="/Listen" element={ListenComponent()}></Route>
        <Route path="/Watch" element={WatchComponent()}></Route>
        <Route path="/Contact" element={ContactComponent()}/>
        <Route path="/ThankYou" element={ThankYouComponent()}/>
        <Route path="/TakeAction" element={TakeActionComponent()}/>
        
        <Route exact path="/Diary" element={TumblrLoginComponent()}/>
        <Route exact path="/StayInTouch" element={StayInTouchComponent()}/>
        {/* 
          <Route exact path="/Diary" element={DiaryComponent()}/>
          <Route
             path="/Spaces/:id"
              element={SpaceComponent()} />
           <Route path="/Profile" element={ProfileComponent()}/> */}
      </Routes>
  );
};

export default App;


