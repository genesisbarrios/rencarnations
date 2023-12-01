import { useState } from "react";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo, useLayoutEffect } from 'react';
import './App.css';
import { Container } from "react-bootstrap";
import { Input,Menu,
    Center,
    Header,
    Group,
    Burger,
    Grid,
    Card, Button } from "@material-ui/core";
 import { Alert } from "react-bootstrap";
import {
        BrowserRouter as Router,
        Route,
        Routes,
        Link,
        Navigate
      } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

const TumblrLogin = (props) => {
    const [inputPassword, setInputPassword] = useState("");
    const [message, setMessage] = useState("");
    const [alert, setAlert] = useState("");
    const navigate = useNavigate();
    const PASSWORD = process.env.REACT_APP_TUMBLR_ACCESS_PASSWORD;

    useEffect(() => {
     
    }, []);


    return (
        <Container style={{minHeight:"65vh", textAlign:"center"}}>
             <h1 style={{margin: "5% 0", fontFamily:"Work Sans"}}><a href="mailto:mgmt@rencarnations.com" style={{color:"white", textDecoration:"none"}}>Password</a></h1>
            <Formik
                initialValues={{ password: inputPassword}} 
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(_, actions) => {
                    setMessage("Checking our records...");
                    if(inputPassword == PASSWORD){
                        //navigate("https://www.tumblr.com/0trodiario")
                        window.location.href = "https://www.tumblr.com/0trodiario";
                    }else{
                        setMessage("");
                        setAlert("Wrong Password, try again!");
                    }
                }}
            >
                {(props) => (
                <Form style={{ width: "100%", color:"white"}} >
                    
                    <Field name="password" >
                        {() => (
                        <>
                            <Input size="xs" style={{  color:"white", width:"15%", marginLeft:"15%"}} 
                            value={inputPassword}
                            onChange={(e) => setInputPassword(e.target.value.toLowerCase())}
                            placeholder={inputPassword || "password"}
                            />
                        </>
                        )}
                    </Field>
                    <span style={{display:"inline", marginTop:'5%'}}>
                        <Button type="submit" style={{margin:"0 20%", backgroundColor:"lightgreen"}}>Enter</Button>
                    </span>
                </Form>
                )}
            </Formik>
           {message && <Alert variant="success" style={{width:"50%", margin:"0 auto", marginTop:"40px"}}>{message}</Alert>}
           {alert && <Alert variant="danger" style={{width:"50%", margin:"0 auto", marginTop:"40px"}}>{alert}</Alert>}
     </Container>
    );
          
};

export default TumblrLogin;
