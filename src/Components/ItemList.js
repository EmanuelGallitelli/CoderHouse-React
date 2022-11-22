import { useState, useEffect } from "react";
import Spinner from './Spinner'
import Item from "./Item";
import { useParams } from "react-router-dom";

import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'



export default function ItemList(){

  const [cartas, setCartas] = useState(<Spinner/>);
  const [loading, isLoading] = useState(true)
  const {categoria} = useParams();
  
  useEffect(() => {
    
const db = getFirestore()
const docRef = categoria ? query(collection(db, 'items'), where("categoria", "==", categoria)) : collection(db, 'items'); 

getDocs(docRef)
  .then((snapshot) => {
  setCartas(snapshot.docs.map((doc)=> ({id:doc.id, ...doc.data()})));
        isLoading(false);
  })
  }, [categoria]);

    return ( 
        <div className="flex flex-wrap justify-start mt-20">
          {loading ? cartas 
        : cartas
        .map((el)=>(

          <Item 
          key={el.id}
          nombre={el.nombre}
          calificacion={el.calificacion}
          autor={el.autor}
          img = {el.img}
          categoria = {el.categoria}
          reseña = {el.reseña}
          id={el.id}

          />
        ))
        }
        </div>

    );
}
