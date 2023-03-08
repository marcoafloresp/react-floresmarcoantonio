import { useState, useEffect } from "react";
import Spinner from './Spinner'
import Item from "./Item";
import { useParams } from "react-router-dom";



export default function ItemList(){

  const [cartas, setCartas] = useState(<Spinner/>);
  const [loading, isLoading] = useState(false)
  const {category} = useParams();
  

  //SIMULACION API
  const listado = () => {
    let items = require("../Backend/productos.json")
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
            isLoading(true)
        }, 2000);
    })
  }


  useEffect(() => {
    async function fetchedItems(){
      const items = await listado(); 
      setCartas(items)
    }

    fetchedItems()
  }, []);

  



    return ( 
        <div className="flex flex-wrap justify-start">
          {!loading ? cartas 
          : category ? cartas
          .filter((libro) => libro.category === category)
          .map((el)=>(

            <Item 
            key={el.id}
            name={el.name}
            title={el.title}
            size={el.size}
            image = {el.image}
            category = {el.category}
            resena = {el.resena}
            id={el.id}
            

            />
          ))
        : cartas
        .map((el)=>(

          <Item 
          key={el.id}
          name={el.name}
          title={el.title}
          size={el.size}
          image = {el.image}
          category = {el.category}
          resena = {el.resena}
          id={el.id}

          />
        ))
        }
        </div>

    );
}