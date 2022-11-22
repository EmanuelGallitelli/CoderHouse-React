
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'






   

function ItemDetailContainer() {
    const {libroID} = useParams();
    const [cartas, setCartas] = useState(<Spinner/>);
  const [loading, isLoading] = useState(true)

  useEffect(() => {
    
const db = getFirestore()

const docRef = query(collection(db, 'items'), where("id", "==", libroID))

getDocs(docRef)
  .then((snapshot) => {
  setCartas(snapshot.docs.map((doc)=> ({id:doc.id, ...doc.data()})));
        isLoading(false);
  })
  }, []);

// Implementar mock invocando a getItem() y utilizando el resolver then
 return(

    
        <div className="md:flex justify-center h-[100vh] ">   
        {loading ? <Spinner/> 
        : cartas.length === 0 ? <h1 className="text-white text-4xl mt-60 font-semibold  ">El producto solicitado no existe.</h1>
        : cartas ? 
         cartas
          .map((el)=>(

            <ItemDetail 
            key={el.id}
            nombre={el.nombre}
            calificacion={el.calificacion}
            autor={el.autor}
            img = {el.img}
            categoria = {el.categoria}
            reseña = {el.reseña}
            id={el.id}
            valor = {el.valor}
            stock= {el.stock}

            />
          )) : null } 
      
          
      


        
        </div>

    );
     

  /* JSX que devuelva un ItemDetail (punto 2) */
}

export default ItemDetailContainer;
