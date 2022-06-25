
import { useEffect, useMemo, useState, Fragment, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import {db, app} from "./firebase-config";
import { getDocs, getDoc, collection, doc, getFirestore, query, limit, where, FieldPath } from "firebase/firestore";
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams, 
} from "react-router-dom";

const Space = () => {

  let { id } = useParams();
  const [space, setSpace] = useState();

  useLayoutEffect(() => {
    const ref = collection(db, "Spaces");
    const q = query(ref, where("id", "==", id));

    const getSpace = async () => {
     const querySnapshot = await getDocs(ref, id);
      querySnapshot.forEach((doc) => {
        //console.log("doc:", doc.id, " => ", doc.data());
        setSpace( doc.data());
        });
    }

    getSpace();
  }, [space]);

  const blogCard = {
    width: "auto",
    height: "auto",
    backgroundColor: "rgb(250, 250, 250)",
    color:"black",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    margin: "20px",
    padding: "20px",
    borderRadius: "15px"
  };

  return (
    <Container style={{marginTop:"10%"}}>
      <div>
        {space && (
          <div>
                <h2> {space.name} </h2>
                <div><img src={space.image}/></div>
                <p>Address: {space.address}</p>
                <p>Phone: {space.phone}</p>
                <p><a href={space.website}>Website</a></p>
                <p>Category: {space.category}</p>
          </div>
        )}

        {!space && <h3>loading...</h3>}
      </div>
    </Container>
  );
};



export default Space;