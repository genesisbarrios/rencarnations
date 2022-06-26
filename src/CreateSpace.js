import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { Key, ReactChild, ReactFragment, ReactPortal, useCallback, useEffect, useMemo, useLayoutEffect, useRef } from 'react';
import {db, app} from "./firebase-config";
import { getDocs,getDoc, collection, deleteDoc, doc, getFirestore, query, where, addDoc } from "firebase/firestore";
import './styles.css';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid'
import Paper from "@material-ui/core/Paper";

const CreateSpace = (props) => {
    const [firestoreUser, setFireStoreUser] = useState();
    const [alert, setAlert] = useState();
    let nameRef = useRef();
    let phoneRef = useRef();
    let addressRef = useRef();
    let websiteRef = useRef();
    let imageRef = useRef();
    let categoryRef =useRef();
    const navigate = useNavigate();

    //add user to firestore if not added yet
    const addSpace = async (Name, Phone, Address, Website, Image, Category) => {
        console.log('add space');
        if(firestoreUser){
            const ref = collection(db, "Spaces");
            const q = query(ref, where("name", "==", Name));
            const querySnapshot = await getDocs(q);

            if(querySnapshot.docs.length === 0){    
                const res = await addDoc(ref, {
                    name: Name,
                    phone: Phone,
                    address: Address,
                    website: Website,
                    image: Image,
                    category: Category
                });
                console.log(res);
                navigate("/Spaces");
            }else{
                setAlert('Space already exists');
            }
        }
    }

    useEffect(() => {
        if(props.fireStoreUser){
            setFireStoreUser(props.fireStoreUser);
        }
    }, [firestoreUser]);

    useLayoutEffect(()=>{
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        let name = nameRef.current.value;
        let phone =  phoneRef.current.value;
        let address = addressRef.current.value;
        let website =  websiteRef.current.value;
        let image =  imageRef.current.value;
        let category =  categoryRef.current.value;

        if(name && phone && address && website && image && category){
            addSpace(name, phone, address, website, image, category);
        }else{
            setAlert("You must fill out all the fields.");
        }
    }
    

    return (
        <Container id="CreateSpacesContainer">
            <h2>Create New Space</h2>
            <div id="formCard">
                <form id="SpaceForm">
                    <input id="name" type="text" ref={nameRef} placeholder="Name"/>
                    <input id="phone" type="text" ref={phoneRef} placeholder="Phone"/>
                    <input id="address" type="text" ref={addressRef} placeholder="Address"/>
                    <input id="website" type="text" ref={websiteRef} placeholder="Website"/>
                    <input id="iamge" type="text" ref={imageRef} placeholder="Image URL"/>
                    <select id="category" ref={categoryRef}>
                        <option value="Restaurant">Restaurant</option>
                        <option value="EventPlanningProduction">Event Planning & Production</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="AutoMotive">AutoMotive & Marine</option>
                        <option value="Education">Education</option>
                        <option value="Tech">Tech</option>
                        <option value="MedicalCare">Medical Care</option>
                        <option value="ReligousOrganizations">Religous Organizations</option>
                        <option value="Entertainment">Entertainment</option>
                    </select>
                    <input onClick={(event) => handleSubmit(event)} type="button" value="Submit" id="submitButton"/>
                </form>
                </div>

                {alert && <p style={{color:"#2A0000", textAlign:"center"}}>{alert}</p>}
         </Container>
    );
          
};

export default CreateSpace;
